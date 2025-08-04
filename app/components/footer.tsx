'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column 1: Club info */}
        <div className={`${styles.footerColumn} ${styles.footerMain}`}>
          <p className={styles.footerTitle}>Responsible Computing Club</p>
          <p className={styles.footerDescription}>
            The Responsible Computing Club (RCC) at SJSU partners with Mozilla to empower students and shape the future of tech.
          </p>
          <div className={styles.footerLogo}>
            <Image
              src="/mozilla-logo-placeholder.png"
              alt="Mozilla Logo"
              width={90}
              height={30}
            />
          </div>
        </div>

        {/* Column 2: Shortcut links */}
        <div className={styles.footerColumn}>
          <p className={styles.footerHeading}>SHORTCUT</p>
          <Link href="/about">about us</Link>
          <Link href="/ambassadorship">ambassadorship</Link>
          <Link href="/events">events</Link>
        </div>

        {/* Column 3: Social links */}
        <div className={styles.footerColumn}>
          <p className={styles.footerHeading}>FOLLOW US</p>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</Link>
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">discord</Link>
        </div>

        {/* Column 4: Contact info */}
        <div className={`${styles.footerColumn} ${styles.contactUs}`}>
          <p className={styles.footerHeading}>CONTACT US</p>
          <p className={styles.contactDescription}>San José State University</p>
          <p className={styles.contactDescription}>rcc.sjsu@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
