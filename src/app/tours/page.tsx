import TourCard from "@/components/TourCard";
import Navbar from "@/components/Navbar";
import { getTours } from "@/data/tours";

export default function Page() {
  const tours = getTours();
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-x-2 gap-y-8 px-24 py-8">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            video={tour.video}
            briefIntro={tour.briefIntro}
            title={tour.title}
            link={`/tours/${tour.id}`}
          />
        ))}
      </div>
    </div>
  );
}
