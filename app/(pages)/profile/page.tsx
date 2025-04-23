"use client";
import styles from "./page.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [name, setName] = useState("Member’s Name");
  const [email, setEmail] = useState("membersemail@rcc.com");
  const [memberStatus, setMemberStatus] = useState("Registered Member");

  // loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ***CLIENT-SIDE LIKELY NOT IDEAL IN NEXT.JS -> CHANGE LATER***

  // LATER IMPLEMENTATION OF BACKEND CALL FOR PROFILE INFORMATION
  // useEffect(() => {
  //   async function fetchProfileData() {
  //     try {
  //       const response = await fetch("BACKEND_API_ENDPOINT", {
  //         // Include authentication headers if needed
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const userData = await response.json();
  //       setName(userData.name);
  //       setEmail(userData.email);
  //       setMemberStatus(userData.memberStatus);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   }
  // });
  return (
    <main className={styles.main}>
      {/* left side: profile details */}
      <section className={styles.left_section}>
        <div className="">
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Member’s Name"
            className={styles.input}
            readOnly
            defaultValue={name}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="name">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="membersemail@rcc.com"
            className={styles.input}
            readOnly
            defaultValue={email}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="name">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="**********************"
            className={styles.input}
            readOnly
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="name">
            Member Status
          </label>
          <select id="status" className={styles.input}>
            <option>{memberStatus}</option>
          </select>
        </div>
      </section>

      {/* right side: requirements */}
      <section className={styles.right_section}>
        <h1 className={styles.requirements_title}>Requirements</h1>
        <div className="flex flex-col justify-center items-center">
          <div className={styles.image_container}>
            <Image
              src="/images/profile-images/circle-congrats.png"
              alt="Requirements Steps"
              layout="responsive"
              width={624} // Adjust these values based on your image's actual width and desired aspect ratio
              height={201}
              objectFit="contain"
            />
          </div>
          <div className={styles.requirement_text_container}>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <p className={styles.requirements_p}>Create an</p>
              <p className={styles.requirements_p}>Account</p>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <p className={styles.requirements_p}>Attend 1</p>
              <p className={styles.requirements_p}>Event</p>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-center">
              <p className={styles.requirements_p}>Attend 2</p>
              <p className={styles.requirements_p}>Events</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
