export const About = () => {
  return (
    <section id="about" className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About ExploreKashmirTours
            </h2>
            <p className="text-muted-foreground">
              Founded in 2010, ExploreKashmirTours is a premier travel company
              specializing in authentic and immersive experiences across the
              beautiful region of Kashmir. Our team of experienced local guides
              brings unparalleled knowledge and passion to every tour.
            </p>
            <p className="text-muted-foreground">
              Our mission is to showcase the true essence of Kashmir - its
              breathtaking landscapes, rich cultural heritage, and warm
              hospitality - while promoting sustainable and responsible tourism
              practices that benefit local communities.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="font-medium">Local Expertise</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  All our guides are locally born and raised with deep knowledge
                  of the region.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                  </svg>
                  <h3 className="font-medium">Sustainable Tourism</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We prioritize eco-friendly practices and support for local
                  communities.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <h3 className="font-medium">Safety First</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your safety and security are our top priorities on every tour.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                  <h3 className="font-medium">Cultural Immersion</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Experience authentic Kashmiri culture, cuisine, and traditions.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1590677880935-b39c4e7924f0?q=80&w=1974&auto=format&fit=crop"
              alt="Kashmiri landscape with traditional boats"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 