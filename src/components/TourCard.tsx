"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

export default function TourCard({
  video,
  title,
  briefIntro,
  link,
}: {
  video: string;
  title: string;
  briefIntro: string;
  link: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  return (
    <div
      onMouseEnter={toggleVideo}
      onMouseLeave={toggleVideo}
      className="relative max-w-sm bg-white h-[430px] border border-gray-200 rounded-lg shadow"
    >
      <video ref={videoRef} width="400" height="520" muted autoPlay={false}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-[14px] font-normal text-gray-700">
          {briefIntro}
        </p>
        <Link
          href={link}
          className="absolute bottom-5 right-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
