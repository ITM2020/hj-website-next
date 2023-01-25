import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
            <Link className={styles.logo} href="/">
              <Image loading="lazy" decoding="async" src="/images/placeholder.png" alt="logo" width="264" height="78"/>
            </Link>
            <p>Extra content if you need it, if not you can delete this whole p tag. I usually do.</p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.lists}>
            <ul>
              <li>
                <h2>Information</h2>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/testimonials">Reviews</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            <ul>
              <li>
                  <h2>Services</h2>
              </li>
              <li>Service1</li>
              <li>Service2</li>
              <li>Service4</li>
              <li>Service5</li>
            </ul>

            <ul>
              <li>
                <h2>Contact</h2>
              </li>
              <li>
                <Link href="/contact">First Address Line<br/>Denver CO 80206</Link>
              </li>
              <li>
                <Link href="tel:555-779-4407">T: (555) 779-4407</Link>
              </li>
              <li>
                <Link href="mailto:email@email.com">Click to Email</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.credit}>
        <span>Designed and Hand Coded by</span>
        <Link href="/" target="_blank" rel="noopener">Your Company Name</Link>
        <span className={styles.copyright}> Copyright 2021 - Present</span>
      </div>
    </footer>
  )
}