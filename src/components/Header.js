import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Header.module.css";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navigation} ${scrollPos ? styles.scrolled : ''}`}>
      <div aria-hidden="true" className={styles.backgroundColorDiv}>
        {/* This div is used to overcome z-index issue. */}
      </div>

      <div className={`${styles.container} container`}>
        <Link className={styles.logoLink} aria-label="click to go to home page" href="/">
          <Image 
            className={`${styles.logoImg} logoImg`}
            aria-hidden="true" 
            src="/images/headerImg.jpg"
            width="221"
            height="66"
            alt="logo"
            decoding="async" />
        </Link>

        <input className={styles.sideMenu} id="sideMenu" type="checkbox"/>

        <label className={styles.hamburgerMenu} htmlFor="sideMenu" aria-expanded="false" aria-controls="navbarMenu">
          <span></span>
          <span aria-hidden="true"></span>
        </label>
              
        <nav className={styles.navbarMenu} aria-label="main navigation">
          <ul>
            <li><Link href="/" className={styles.nextLink}>Home</Link></li>
            <li><Link href="/" className={styles.nextLink}>Shop</Link></li>
            <li><Link href="/" className={styles.nextLink}>Services</Link></li>
            <li><Link href="/about" className={styles.nextLink}>About Us</Link></li>
            <li><Link href="/" className={styles.nextLink}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>

  )
}