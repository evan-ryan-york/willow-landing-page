"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  school: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Willow is incredible! It helps me, my students, and families find high-quality post-secondary educational options. I would highly recommend working with Willow.",
    author: "Cassidy",
    role: "Counselor",
    school: "",
  },
  {
    quote:
      "Partnering with Willow has truly transformed the way my team and students thrive. I have complete peace of mind knowing my team is equipped with a top-tier curriculum, meticulously tailored to align with our unique vision and needs. Even more importantly, my students now engage with a high-quality, real-world curriculum that empowers them to navigate and excel during some of the most pivotal years of their lives.",
    author: "Wauneta",
    role: "High School Principal",
    school: "",
  },
  {
    quote:
      "Willow is providing students the opportunity to expand their horizons and explore professional pathways that otherwise tend to get overlooked. My students too often miss out on these paths because they simply don't know about them. Being informed is half the battle.",
    author: "Nuvia",
    role: "Counselor",
    school: "",
  },
  {
    quote:
      "Willow is helping us serve all of our students with excellence.",
    author: "Annalise",
    role: "Charter Network Leader",
    school: "",
  },
  {
    quote:
      "Willow Ed has enhanced my seminar class by providing me with great tools. This has allowed me to focus on providing high quality classroom instruction and building strong student relationships. Willow Ed has made it a priority to implement my feedback and my students as well. We are lucky to have the Willow Ed curriculum and platform in our classroom to support the future generation of leaders.",
    author: "Yosedit",
    role: "College Seminar Teacher",
    school: "",
  },
  {
    quote:
      "I'm seeing students engage in a different way than they ever have before. Students are now interested in applying for summer programs, getting involved in community service, advocating for themselves. It's been really exciting to see how this work is translating into students taking ownership of their futures earlier.",
    author: "Vincent Caricato",
    role: "",
    school: "KIPP Colorado",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-heading mb-4">
            What Our Partners Think
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Hear from educators and administrators who are transforming career
            readiness with Willow Education.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors"
    >
      {/* Quote */}
      <p className="text-secondary mb-6 leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {/* Author Image Placeholder - Grey Circle */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />

        {/* Author Details */}
        <div>
          <div className="font-semibold text-primary">{testimonial.author}</div>
          <div className="text-sm text-secondary">{testimonial.role}</div>
          <div className="text-sm text-secondary">{testimonial.school}</div>
        </div>
      </div>
    </motion.div>
  );
}
