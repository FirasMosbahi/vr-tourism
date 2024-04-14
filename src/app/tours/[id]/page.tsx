import React from "react";
import Navbar from "@/components/Navbar";
import { getTourById } from "@/data/tours";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const tour = getTourById(Number.parseInt(params.id ?? "1"));
  return (
    <div className="relative">
      <div className="absolute z-50 top-2 w-full flex flex-row justify-center">
        <Navbar />
      </div>
      <video width="1500" height="800" muted loop={true} autoPlay={true}>
        <source src={tour.video} type="video/mp4" />
      </video>
      <div className="absolute top-60 flex flex-col gap-8 items-center left-[30%] max-w-[800px]">
        <strong className="text-[48px] text-center font-bold">
          Explorer {tour.title}
        </strong>
        <p className="text-[28px] text-center max-w-[600px]">
          {tour.callToAction}
        </p>
        <Link href={tour.vr ? `/vr/${tour.id}` : "#"} target="_blank">
          <button className="px-4 py-2 mt-8 border border-white border-solid rounded-2xl">
            Visiter le monument
          </button>
        </Link>
      </div>
    </div>
  );
}
