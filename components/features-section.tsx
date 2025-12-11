"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GreyPlaceholder } from "./grey-placeholder";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Comprehensive Career Curriculum",
    description:
      "Our research-backed curriculum introduces students to diverse career pathways, helping them discover opportunities aligned with their interests and strengths.",
  },
  {
    title: "Interactive Platform",
    description:
      "Engage students with our intuitive platform featuring interactive assessments, career exploration tools, and personalized learning pathways.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Track student engagement and progress with powerful analytics. Make informed decisions to improve outcomes and demonstrate program impact.",
  },
  {
    title: "Professional Development",
    description:
      "Equip educators with training and resources to effectively deliver career exploration content and support student growth.",
  },
  {
    title: "Community Connections",
    description:
      "Connect students with local employers, mentors, and industry professionals to provide real-world context and networking opportunities.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Everything You Need to Transform Career Readiness
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources to
            deliver impactful career exploration experiences.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              feature={feature}
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  feature,
  index,
  reverse,
}: {
  feature: Feature;
  index: number;
  reverse: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Placeholder */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <GreyPlaceholder aspectRatio="video" className="w-full" />
      </div>

      {/* Content */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {feature.description}
        </p>
        <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors inline-flex items-center gap-2 border-b-2 border-gray-900 pb-1">
          Learn More
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </motion.div>
  );
}
