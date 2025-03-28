import { Testimonial } from "@/data/testimonials";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={i < testimonial.rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        <blockquote className="space-y-2">
          <p className="text-muted-foreground">"{testimonial.quote}"</p>
        </blockquote>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.location} • {testimonial.tour}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}; 