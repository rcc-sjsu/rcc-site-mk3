import styles from "./page.module.css";
import Image from "next/image";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface ProfileProps {
  name: string;
  email: string;
  memberStatus: string;
}

export default function Profile({ name, email, memberStatus }: ProfileProps) {
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
            placeholder="**********************"
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

// function runs on the server every time a user requests the profile page, passing the necessary props from the backend to the frontend
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const res = await fetch("BACKEND_API_ENDPOINT", {
      // additional headers if needed (authentication, etc)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch profile data");
    }

    const data = await res.json();

    return {
      props: {
        name: data.name,
        email: data.email,
        memberStatus: data.memberStatus,
      },
    };
  } catch (error: any) {
    return {
      props: {
        name: "Member's Name",
        email: "membersemail@rcc.com",
        memberStatus: "Registered Member",
        // error: error.message,
      },
    };
  }
};
