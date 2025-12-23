"use client";

import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export function DiscoverySectionV2() {
  return (
    <section className="relative py-24 md:py-32 bg-[#f8f8f6] overflow-hidden">
      {/* Left side images - positioned off the left edge, scaling down on smaller screens */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] md:w-[22%] lg:w-[25%]">
        {/* Top left */}
        <div
          className="absolute -left-[20%] top-[8%] w-[90%] aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(-6deg)" }}
        >
          <Image
            src="/personality-archetype-illustrations/CONVENTIONAL_CONSCIENTIOUSNESS.jpg"
            alt="Personality archetype"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>

        {/* Middle left */}
        <div
          className="absolute -left-[10%] top-[38%] w-[80%] aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(4deg)" }}
        >
          <Image
            src="/personality-archetype-illustrations/ARTISTIC_OPENNESS.jpg"
            alt="Personality archetype"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>

        {/* Bottom left */}
        <div
          className="absolute -left-[25%] bottom-[5%] w-[85%] aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(-3deg)" }}
        >
          <Image
            src="/personality-archetype-illustrations/REALISTIC_CONSCIENTIOUSNESS.jpg"
            alt="Personality archetype"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>
      </div>

      {/* Right side images - positioned off the right edge, scaling down on smaller screens */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] md:w-[22%] lg:w-[25%]">
        {/* Top right */}
        <div
          className="absolute -right-[15%] top-[5%] w-[90%] aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(7deg)" }}
        >
          <Image
            src="/personality-archetype-illustrations/INVESTIGATIVE_EXTRAVERSION.jpg"
            alt="Personality archetype"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>

        {/* Middle right */}
        <div
          className="absolute -right-[20%] top-[40%] w-[85%] aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(-5deg)" }}
        >
          <Image
            src="/personality-archetype-illustrations/SOCIAL_OPENNESS.jpg"
            alt="Personality archetype"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>

        {/* Bottom right */}
        <div
          className="absolute -right-[10%] bottom-[8%] w-[80%] aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
          style={{ transform: "rotate(4deg)" }}
        >
          <Image
            src="/personality-archetype-illustrations/CONVENTIONAL_EMOTIONALSTABILITY.jpg"
            alt="Personality archetype"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>
      </div>

      {/* Center content - takes up middle 60% and never overlaps with image columns */}
      <div className="relative z-10 mx-auto px-6 text-center" style={{ maxWidth: "min(600px, 60%)" }}>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-heading mb-8">
          Discovery starts here
        </h2>

        <blockquote className="text-lg md:text-xl text-secondary leading-relaxed mb-4">
          &ldquo;When I was a principal, the hardest question to answer was &lsquo;What do I want to be?&rsquo; This quiz is how we start that conversation with every student.&rdquo;
        </blockquote>

        <p className="text-secondary font-medium mb-10">
          — James Cryan, Founder & CEO
        </p>

        <Link href="/personality-quiz">
          <Button variant="primary">
            Take the 2-minute Personality Quiz
          </Button>
        </Link>
      </div>
    </section>
  );
}
