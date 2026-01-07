"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export interface ImageLoadState {
  loaded: boolean;
  error: boolean;
}

export interface UseImageLoaderOptions {
  /** Images that must load before showing any content */
  critical?: string[];
  /** Images that load after critical images are ready */
  secondary?: string[];
  /** Images that load last (decorative) */
  decorative?: string[];
  /** Delay before starting secondary image preload (ms) */
  secondaryDelay?: number;
  /** Delay before starting decorative image preload (ms) */
  decorativeDelay?: number;
}

export interface UseImageLoaderReturn {
  /** Whether all critical images are loaded */
  criticalReady: boolean;
  /** Whether all secondary images are loaded */
  secondaryReady: boolean;
  /** Whether all decorative images are loaded */
  decorativeReady: boolean;
  /** Whether all images are loaded */
  allReady: boolean;
  /** Check if a specific image is loaded */
  isLoaded: (src: string) => boolean;
  /** Manually mark an image as loaded (for Next.js Image onLoad) */
  markLoaded: (src: string) => void;
}

/**
 * Hook for coordinated, staged image loading.
 * Preloads images in priority order: critical -> secondary -> decorative
 */
export function useImageLoader(options: UseImageLoaderOptions): UseImageLoaderReturn {
  const {
    critical = [],
    secondary = [],
    decorative = [],
    secondaryDelay = 100,
    decorativeDelay = 200,
  } = options;

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [criticalReady, setCriticalReady] = useState(critical.length === 0);
  const [secondaryReady, setSecondaryReady] = useState(secondary.length === 0);
  const [decorativeReady, setDecorativeReady] = useState(decorative.length === 0);

  const preloadedRef = useRef<Set<string>>(new Set());

  const markLoaded = useCallback((src: string) => {
    setLoadedImages((prev) => {
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  }, []);

  const isLoaded = useCallback((src: string) => {
    return loadedImages.has(src);
  }, [loadedImages]);

  // Preload a single image
  const preloadImage = useCallback((src: string): Promise<void> => {
    // Skip if already preloaded
    if (preloadedRef.current.has(src)) {
      return Promise.resolve();
    }
    preloadedRef.current.add(src);

    return new Promise((resolve) => {
      // For SVGs and already cached images, resolve immediately
      if (src.endsWith('.svg')) {
        markLoaded(src);
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        markLoaded(src);
        resolve();
      };
      img.onerror = () => {
        // Still mark as "loaded" to not block the UI
        markLoaded(src);
        resolve();
      };
      img.src = src;
    });
  }, [markLoaded]);

  // Preload a group of images
  const preloadGroup = useCallback(async (images: string[]): Promise<void> => {
    if (images.length === 0) return;
    await Promise.all(images.map(preloadImage));
  }, [preloadImage]);

  // Check if all images in a group are loaded
  useEffect(() => {
    if (critical.length > 0 && critical.every((src) => loadedImages.has(src))) {
      setCriticalReady(true);
    }
    if (secondary.length > 0 && secondary.every((src) => loadedImages.has(src))) {
      setSecondaryReady(true);
    }
    if (decorative.length > 0 && decorative.every((src) => loadedImages.has(src))) {
      setDecorativeReady(true);
    }
  }, [loadedImages, critical, secondary, decorative]);

  // Staged preloading
  useEffect(() => {
    // Start with critical images immediately
    preloadGroup(critical).then(() => {
      // Then secondary images after delay
      if (secondary.length > 0) {
        setTimeout(() => {
          preloadGroup(secondary);
        }, secondaryDelay);
      }
    });
  }, [critical, secondary, secondaryDelay, preloadGroup]);

  // Decorative images load after secondary
  useEffect(() => {
    if (secondaryReady && decorative.length > 0) {
      setTimeout(() => {
        preloadGroup(decorative);
      }, decorativeDelay);
    }
  }, [secondaryReady, decorative, decorativeDelay, preloadGroup]);

  return {
    criticalReady,
    secondaryReady,
    decorativeReady,
    allReady: criticalReady && secondaryReady && decorativeReady,
    isLoaded,
    markLoaded,
  };
}
