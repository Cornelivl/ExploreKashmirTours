export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tour: string;
  quote: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "London, UK",
    tour: "Dal Lake Houseboat Experience",
    quote:
      "Our houseboat stay on Dal Lake was magical! The floating gardens, stunning mountain views, and warm hospitality made this trip unforgettable. Our guide knew all the hidden spots that tourists typically miss.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Toronto, Canada",
    tour: "Gulmarg Adventure Package",
    quote:
      "The gondola ride up to Apharwat Peak offered breathtaking views! Even in summer, the meadows were lush and beautiful. The team at ExploreKashmirTours went above and beyond to create a personalized experience.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: "3",
    name: "Priya Sharma",
    location: "Delhi, India",
    tour: "Complete Kashmir Circuit",
    quote:
      "As an Indian traveler, I was amazed at how much of Kashmir's beauty I had yet to discover. The 10-day circuit was perfectly paced, allowing us to truly immerse in each location. Highly recommend!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: "4",
    name: "James Wilson",
    location: "Sydney, Australia",
    tour: "Pahalgam Valley Trek",
    quote:
      "The trek through Pahalgam Valley was challenging but incredibly rewarding. Our guide was knowledgeable about the local ecosystem and made sure we were safe while enjoying the pristine nature.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "5",
    name: "Ana Rodriguez",
    location: "Madrid, Spain",
    tour: "Sonmarg Glacier Expedition",
    quote:
      "The Thajiwas Glacier was unlike anything I've seen before! Despite traveling extensively, Kashmir offers truly unique landscapes. The cultural experiences included in our tour made it even more special.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
]; 