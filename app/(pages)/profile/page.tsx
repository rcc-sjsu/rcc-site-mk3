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
      <section className={styles.right_section}>
        <h1 className={styles.requirements_title}>Requirements</h1>
        <div className="flex flex-col justify-center items-center">
          <div className={styles.image_container}>
            <Image
              src="/images/profile-images/checkmark-circles.svg"
              alt="Requirements Steps"
              layout="responsive"
              width={540} // Adjust these values based on your image's actual width and desired aspect ratio
              height={88}
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
