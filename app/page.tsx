import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <body>
       <main>
        <div className={styles.content}>
            <h1>Responsible Computing Club</h1>
            <p>
                The Responsible Computing Club (RCC) at SJSU, partnering with Mozilla, 
                empowers students to shape the future of tech. Connect with us below!
            </p>
            <div className={styles.icons}>
                <a href="https://www.instagram.com/rcc.sjsu/"><Image src="/icons/instagram-icon.svg" alt="Instagram" width="100" height="100" /></a>
                <a href="https://www.linkedin.com/company/rcc-sjsu/"><Image src="/icons/linkedin.svg" alt="LinkedIn"  width="100" height="100"/></a>
                <a href="https://discord.gg/RGG9dMw4Rc/"><Image src="/icons/discord-icon.svg" alt="Discord"  width="100" height="100"/></a>
                {/* <a href="mailto:rcc.sjsu@gmail.com"><Image src="assets/social-icons/email-icon.svg" alt="Email"  width="100" height="100"/></a> */}
            </div>
        </div>
        <div className={styles.illustrations}>
            <div className={styles.circle}>
                <Image src="/icons/mozilla-logo.png" alt="Mozilla"  width="100" height="100"/>
            </div>
            <div className={styles.decorations}>
                <Image src="/icons/lightbulb.svg" alt="Lightbulb" className={styles.lightbulb}  width="100" height="100"/>
                <Image src="/icons/smiley-icon.svg" alt="Smiley" className={styles.smiley}  width="100" height="100"/>
            </div>
        </div>
    </main>
    </body>
  );
}
