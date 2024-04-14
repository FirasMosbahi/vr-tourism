import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between">
      <div
        style={{
          backgroundImage: `url('/home.jpg')`,
          backgroundSize: "cover" /* Adjust background size as needed */,
          backgroundPosition:
            "center" /* Adjust background position as needed */,
          width: "100vw" /* Optional: Set width for full viewport width */,
          height: "100vh" /* Optional: Set height for full viewport height */,
        }}
        className="flex flex-col items-center justify-end gap-4 pb-20"
      >
        <div className="absolute top-2">
          <Navbar />
        </div>
        <strong className="text-[24px]">
          Explore Tunisia{"'"}s ancient wonders
        </strong>
        <p className="text-[20px]">
          Step into history with VR tourism and join us now , a lot of fun is
          waiting !
        </p>
        <Link href="/tours">
          <button className="border border-solid border-white text-[20px] mt-12 font-semibold px-4 py-2 rounded-2xl">
            Explorer
          </button>
        </Link>
      </div>
    </main>
  );
}
