export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: "1",
    title: "Dal Lake Houseboat Experience",
    description:
      "Experience the tranquil beauty of Kashmir's Dal Lake with a stay in a traditional houseboat. Enjoy floating gardens, mountain views, and authentic Kashmiri hospitality.",
    price: 15000,
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1623909636775-78cc5f46a775?q=80&w=1974&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Gulmarg Adventure Package",
    description:
      "Explore the picturesque meadows of Gulmarg, renowned for skiing in winter and lush greenery in summer. Includes gondola ride to Apharwat Peak.",
    price: 18000,
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1554310603-d39d43033735?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "Pahalgam Valley Trek",
    description:
      "Trek through the stunning Pahalgam Valley, surrounded by pine forests, meadows and snow-capped mountains with views of rushing rivers.",
    price: 20000,
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1570700258112-e259d3dbcb8e?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "4",
    title: "Sonmarg Glacier Expedition",
    description:
      "Journey to the magnificent Thajiwas Glacier in Sonmarg, known as the 'Meadow of Gold'. Experience breathtaking mountain scenery and pristine nature.",
    price: 22000,
    duration: "4 Days",
    image:
      "https://images.unsplash.com/photo-1556375413-c1bfd50e5808?q=80&w=2071&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "5",
    title: "Complete Kashmir Circuit",
    description:
      "The ultimate Kashmir experience covering Srinagar, Gulmarg, Pahalgam, and Sonmarg with cultural experiences, outdoor activities, and authentic cuisine.",
    price: 35000,
    duration: "10 Days",
    image:
      "https://images.unsplash.com/photo-1545708648-29ca730c633c?q=80&w=1974&auto=format&fit=crop",
    featured: false,
  },
]; 