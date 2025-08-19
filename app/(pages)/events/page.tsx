"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InstaCarousel from "@/app/components/instapost";

export default function Events() {
  return (
    <div className="p-20">
      <div className="flex items-center justify-center mb-16">
        {/* //replace this with component */}
        <h1 className="text-4xl font-bold text-purple-800 mr-4">Events</h1>
        <Image
          src="/icons/shape-icon.svg"
          alt="Shape Icon"
          width={200}
          height={200}
        />
      </div>
      {/* //add gradient background */}
      <div className="flex justify-between items-center mb-26">
        {/* Left images section */}
        <div className="flex gap-8 mr-16">
          {/* Left circular image */}
          <div className="relative mt-14">
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

        <div className="mt-20">
          <p className={styles.description}>
            RCC's committees regularly hold events to promote{" "}
            <strong className={styles.fontBold}>community involvement </strong>
            in ethical technology and cross-disciplinary initiative!
          </p>
        </div>
      </div>

      {/* //replace this with divider component */}
      <hr />

      <div className="p-20">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mr-4">
            What's Happening
          </h1>
        </div>

        <InstaCarousel />
      </div>
      <div className="p-20">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=ba082a045ebb79e7325f95fbc0f236a7d7434acd77b72ce313ff6eebc137e868%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          title="Styled Calendar"
          className="styled-calendar-container"
          style={{ width: "100%", border: "none" }}
          data-cy="calendar-embed-iframe"
        />
        <script
          async
          type="module"
          src="https://embed.styledcalendar.com/assets/parent-window.js"
        ></script>
      </div>
    </div>
  );
}
