import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import { Button } from "@/components/ui/button";

export const FeaturedTours = () => {
  // Filter out only the featured tours
  const featuredTours = tours.filter((tour) => tour.featured);

  return (
    <section id="tours" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Tours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover our handpicked selection of immersive experiences that
            showcase the natural beauty and cultural richness of Kashmir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">View All Tours</Button>
        </div>
      </div>
    </section>
  );
}; 