import TourCard from "@/components/TourCard";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-8 px-24 py-8">
      <TourCard
        video="/tours/el jam amphitheatre.mp4"
        title="El Jam amphitheatre"
        briefIntro="a brief intro about el jam amphitheatre"
      />
      <TourCard
        video="/tours/mosque djerba.mp4"
        title="mosque djerba"
        briefIntro="a brief intro about mosque djerba"
      />
      <TourCard
        video="/tours/musée archéologique de tunis.mp4"
        title="musée archéologique de Tunis"
        briefIntro="a brief intro about musée archéologique de Tunis"
      />
      <TourCard
        video="/tours/sidi bousaid.mp4"
        title="sidi Bousaid"
        briefIntro="A brief intro about sidi Bousaid"
      />
      <TourCard
        video="/tours/tataouine berber village.mp4"
        title="tataouine berber village"
        briefIntro="A brief intro about tataouine berber village"
      />
    </div>
  );
}
