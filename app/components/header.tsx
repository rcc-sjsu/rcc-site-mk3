import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header: React.FC = () => {
    return (
        <header className="root-header">
            <div className="grid grid-cols-10 gap-2">
                <div className="col-span-6 col-start-3">
                    <div className="coulmns-4 gap-2">
                        <Link href="/about">about us</Link>
                        <Link href="/committees">committees</Link>
                        <Link href="/events">events</Link>
                        <Link href="/portfolio">portfolio</Link>
                    </div>
                </div>
                <div className="col-span-1 col-start-9">
                    <div className={styles.signup_button}></div>
                    <Link href="/signup">sign up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
