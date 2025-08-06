"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Events() {
  return (
    <div className="p-20">
      <div className="flex items-center justify-center mb-16">
        <h1 className="text-4xl font-bold text-purple-800 mr-4">Events</h1>
        <Image
          src="/icons/shape-icon.svg"
          alt="Shape Icon"
          width={200}
          height={200}
        />
      </div>

      <div className="flex justify-between items-center mb-28">
        {/* Left images section */}
        <div className="flex gap-8 mr-16">
          {/* Left circular image */}
          <div className="relative">
            <Image
              src="/images/events1.jpg"
              alt="events1"
              className="rounded-full object-cover"
              width={424}
              height={424}
            />
          </div>

          <div className="relative">
            <Image
              src="/images/events2.jpg"
              alt="events2"
              className="rounded-full object-cover"
              width={530}
              height={530}
            />
          </div>
        </div>

        <div>
          <p className="text-lg" style={{ width: "700px" }}>
            RCC's committees regularly hold events to promote{" "}
            <strong>community involvement</strong> in ethical technology and
            cross-disciplinary initiative!
          </p>
        </div>
      </div>

      <hr />

      <div className="p-20">
        <div className="flex items-center justify-center mb-20">
          <h1 className="text-4xl font-bold text-purple-800 mr-4">
            What's Happening
          </h1>
        </div>
      </div>
    </div>
  );
}
