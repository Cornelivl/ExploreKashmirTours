import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-primary">
            ExploreKashmirTours
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <a href="#tours" className="text-sm font-medium hover:text-primary">
            Tours
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline" asChild>
            <a href="#contact">Book Now</a>
          </Button>
          <div className="md:hidden">
            {/* Mobile menu button will be implemented later */}
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
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
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}; 