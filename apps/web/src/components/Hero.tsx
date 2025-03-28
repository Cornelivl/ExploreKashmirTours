import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative">
      {/* Hero background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566837574942-8b5b0fa90c22?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero content */}
      <div className="container relative flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Explore the Paradise on Earth
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90">
          Discover the breathtaking landscapes, vibrant culture, and warm
          hospitality of Kashmir with our expertly crafted tours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#tours">Discover Tours</a>
          </Button>
          <Button size="lg" variant="outline" className="bg-background/20" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}; 