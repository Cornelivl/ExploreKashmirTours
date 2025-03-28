import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const maxIndex = testimonials.length - itemsPerPage.desktop;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Travelers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear from guests who have experienced the wonder of Kashmir with our
            guided tours and personalized experiences.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / itemsPerPage.desktop)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4 sm:min-w-[50%] lg:min-w-[33.333%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="h-8 w-8 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Previous</span>
            </Button>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full p-0 ${
                  activeIndex === i
                    ? "bg-primary"
                    : "bg-muted-foreground/20"
                }`}
              >
                <span className="sr-only">Page {i + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex === maxIndex}
              className="h-8 w-8 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}; 