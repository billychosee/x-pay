import Image from "next/image";
import React from "react";

// Define a type for a single testimonial object for TypeScript safety
type Testimonial = {
  logoSrc: string;
  logoAlt: string;
  name: string;
  title: string;
  quote: string;
};

// Define the props that the Testimonials component will accept
type TestimonialsProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

const Testimonials = ({ title, subtitle, testimonials }: TestimonialsProps) => {
  return (
    <section className="px-5 py-16 bg-white md:px-24">
      {/* The heading is now dynamic via props */}
      <div className="mb-16 text-center">
        <h3 className="text-base font-semibold tracking-wider text-gray-600 uppercase">
          {title}
        </h3>
        <h2 className="mt-2 text-4xl font-extrabold text-[#CC9900]">
          {subtitle}
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          See what our clients have to say about SmatPay
        </p>
      </div>

      {/* The grid now maps over the testimonials array from props */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name} // Use a unique value like the name for the key
            className="flex flex-col p-8 bg-white border border-gray-100 rounded-lg shadow-lg"
          >
            <div className="mb-5">
              <Image
                src={testimonial.logoSrc}
                alt={testimonial.logoAlt}
                width={120}
                height={32}
                className="w-auto h-8"
              />
            </div>
            <div className="mb-5">
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
            <p className="flex-grow italic text-gray-700">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;