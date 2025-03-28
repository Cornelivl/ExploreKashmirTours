import { Tour } from "@/data/tours";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TourCardProps {
  tour: Tour;
}

export const TourCard = ({ tour }: TourCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{tour.title}</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span className="font-medium text-primary">₹{tour.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">{tour.duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {tour.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}; 