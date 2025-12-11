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
      "Willow Education transformed how we approach career readiness. Our students are more engaged and excited about their futures than ever before.",
    author: "Sarah Johnson",
    role: "Chief Academic Officer",
    school: "Lincoln Unified School District",
  },
  {
    quote:
      "The platform is intuitive and the curriculum is research-backed. It's exactly what we needed to modernize our career exploration program.",
    author: "Michael Chen",
    role: "Career & College Counselor",
    school: "Riverside High School",
  },
  {
    quote:
      "The data insights help us demonstrate program impact to stakeholders. We've seen measurable improvements in student engagement and outcomes.",
    author: "Emily Rodriguez",
    role: "Director of Student Services",
    school: "Westfield Academy",
  },
  {
    quote:
      "Professional development for our staff was exceptional. Teachers felt confident and prepared to deliver the curriculum from day one.",
    author: "David Thompson",
    role: "Principal",
    school: "Northside Middle School",
  },
  {
    quote:
      "Students love the interactive platform. It's made career exploration accessible and engaging for all learners.",
    author: "Jennifer Lee",
    role: "College & Career Coordinator",
    school: "Eastwood School District",
  },
  {
    quote:
      "The community connections feature brought real-world professionals into our classrooms. Students gained invaluable insights into various careers.",
    author: "Robert Martinez",
    role: "CTE Director",
    school: "Summit County Schools",
  },
  {
    quote:
      "Implementation was seamless with outstanding support from the Willow team. They were with us every step of the way.",
    author: "Amanda Williams",
    role: "Chief Innovation Officer",
    school: "Lakeside Schools",
  },
  {
    quote:
      "Our students from underserved communities now have access to career exploration opportunities they never had before. This is truly transformative.",
    author: "Carlos Gutierrez",
    role: "Equity & Access Director",
    school: "Valley View District",
  },
  {
    quote:
      "The curriculum aligns perfectly with our district goals. We've seen significant growth in students' career awareness and planning skills.",
    author: "Lisa Anderson",
    role: "Superintendent",
    school: "Oakdale Public Schools",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            What Our Partners Think
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {/* Author Image Placeholder - Grey Circle */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />

        {/* Author Details */}
        <div>
          <div className="font-semibold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
          <div className="text-sm text-gray-500">{testimonial.school}</div>
        </div>
      </div>
    </motion.div>
  );
}
