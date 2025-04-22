import styles from "./page.module.css";
import Image from "next/image";

export default function Profile() {
  return (
    <main className={styles.main}>
      {/* left side: form */}
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
            <option>Registered Member</option>
            <option>Ambassador</option>
            <option>Lead Ambassador</option>
          </select>
        </div>
      </section>

      {/* right side: requirements */}
      <section className="text-center w-4xl bg-amber-50">
        <h1 className={styles.requirements_title}>Requirements</h1>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/profile-images/checkmark-circles.svg"
              alt="Requirements Steps"
              layout="responsive"
              width={1200} // Adjust these values based on your image's actual width and desired aspect ratio
              height={225}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-between w-full max-w-md mt-4">
            {" "}
            {/* Container for the text labels */}
            <div className="text-center">
              <p className="text-sm">Create an</p>
              <p className="text-sm">Account</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Attend 1</p>
              <p className="text-sm">Event</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Attend 2</p>
              <p className="text-sm">Events</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
