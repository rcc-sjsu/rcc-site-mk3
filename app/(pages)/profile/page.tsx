import styles from "./page.module.css";
import Image from "next/image";

async function getProfileData() {
  try {
    const res = await fetch("BACKEND_API_ENDPOINT", {
      // credentials, headers, auth, etc
      cache: "no-store", // fetch fresh information everytime profile page is requested
    });

    if (!res.ok) {
      throw new Error("Failed to fetch profile data");
    }

    const data = await res.json();
    return {
      name: data.name,
      email: data.email,
      memberStatus: data.memberStatus,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching profile data; ", error.message);
    } else {
      console.error("Unknown error fetching profile data");
    }

    // return fallback data in case data fetch fails
    return {
      name: "Member's Name",
      email: "membersemail@rcc.com",
      memberStatus: "Registered Member",
    };
  }
}

export default async function Profile() {
  const { name, email, memberStatus } = await getProfileData();
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
          <label className={styles.label} htmlFor="email">
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
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*****************"
            className={styles.input}
            readOnly
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="member-status">
            Member Status
          </label>
          <select id="member-status" className={styles.input}>
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
