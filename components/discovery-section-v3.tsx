"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export function DiscoverySectionV3() {
  const leftImages = [
    { src: "/personality-type-images/ARTISTIC_OPENNESS.jpg", alt: "Artistic and creative personality type" },
    { src: "/personality-type-images/SOCIAL_AGREEABLENESS.jpg", alt: "Social and agreeable personality type" },
    { src: "/personality-type-images/ENTERPRISING_EXTRAVERSION.jpg", alt: "Enterprising and extraverted personality type" },
  ];

  const rightImages = [
    { src: "/personality-type-images/INVESTIGATIVE_OPENNESS.jpg", alt: "Investigative and curious personality type" },
    { src: "/personality-type-images/REALISTIC_CONSCIENTIOUSNESS.jpg", alt: "Realistic and conscientious personality type" },
    { src: "/personality-type-images/CONVENTIONAL_EMOTIONALSTABILITY.jpg", alt: "Conventional and emotionally stable personality type" },
  ];

  const mobileImages = [
    { src: "/personality-type-images/ARTISTIC_OPENNESS.jpg", alt: "Artistic and creative personality type" },
    { src: "/personality-type-images/SOCIAL_AGREEABLENESS.jpg", alt: "Social and agreeable personality type" },
    { src: "/personality-type-images/ENTERPRISING_EXTRAVERSION.jpg", alt: "Enterprising and extraverted personality type" },
  ];

  return (
    <section className="relative py-16 md:py-24 xl:py-40 bg-white overflow-hidden">
      {/* Mobile/Tablet: 3 images in a row above text */}
      <div className="flex justify-center mb-10 xl:hidden">
        <div className="flex items-center">
          {mobileImages.map((image, index) => (
            <div
              key={index}
              className="relative w-14 h-14 sm:w-[68px] sm:h-[68px] md:w-20 md:h-20 rounded-[12px] overflow-hidden shadow-lg border-2 border-white"
              style={{
                transform: "rotate(10deg)",
                marginLeft: index === 0 ? 0 : "-8px",
                zIndex: mobileImages.length - index,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Left side images - spreading outward from center */}
      <div className="absolute left-0 top-0 bottom-0 w-[18%] pointer-events-none hidden xl:block">
        {/* Image 1 - closest to center, slight angle */}
        <div
          className="absolute right-0 top-1/2 w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl overflow-hidden shadow-lg"
          style={{ transform: "translateY(-50%) rotate(-3deg)" }}
        >
          <Image
            src={leftImages[0].src}
            alt={leftImages[0].alt}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Image 2 - middle, more angle */}
        <div
          className="absolute right-[25%] top-[15%] w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-2xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(-8deg)" }}
        >
          <Image
            src={leftImages[1].src}
            alt={leftImages[1].alt}
            fill
            className="object-cover"
            sizes="144px"
          />
        </div>

        {/* Image 3 - furthest, most angle, cut off at edge */}
        <div
          className="absolute -left-[30%] bottom-[12%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(-15deg)" }}
        >
          <Image
            src={leftImages[2].src}
            alt={leftImages[2].alt}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>
      </div>

      {/* Desktop: Right side images - spreading outward from center */}
      <div className="absolute right-0 top-0 bottom-0 w-[18%] pointer-events-none hidden xl:block">
        {/* Image 1 - closest to center, slight angle */}
        <div
          className="absolute left-0 top-1/2 w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl overflow-hidden shadow-lg"
          style={{ transform: "translateY(-50%) rotate(3deg)" }}
        >
          <Image
            src={rightImages[0].src}
            alt={rightImages[0].alt}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Image 2 - middle, more angle */}
        <div
          className="absolute left-[25%] top-[15%] w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 rounded-2xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(8deg)" }}
        >
          <Image
            src={rightImages[1].src}
            alt={rightImages[1].alt}
            fill
            className="object-cover"
            sizes="144px"
          />
        </div>

        {/* Image 3 - furthest, most angle, cut off at edge */}
        <div
          className="absolute -right-[30%] bottom-[12%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(15deg)" }}
        >
          <Image
            src={rightImages[2].src}
            alt={rightImages[2].alt}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-heading mb-8">
          Discovery starts here
        </h2>

        <blockquote className="text-lg md:text-xl text-secondary leading-relaxed mb-10">
          &ldquo;Don&apos;t ask &lsquo;What do you want to be?&rsquo; Ask what do you want your life to be like? How can you find purpose and meaning in your life to use your strengths for the most good?&rdquo;
        </blockquote>

        <Link href="/personality-quiz">
          <Button variant="primary">
            Take the personality quiz
          </Button>
        </Link>
      </div>
    </section>
  );
}
