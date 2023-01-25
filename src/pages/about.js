import Image from "next/image";
import styles from "../styles/about.module.css";



export default function About() {
  return (
    <>
    <section id="int-hero" className={styles.intHero}>
      <h1 id="home-h">About Us</h1>
      <picture>
        <Image src="/images/placeholder.png" alt="house" width="1920" height="850" />
      </picture>
    </section>

    <section id="sbs" className={styles.sbs}>
      <div className={styles.csContainer}>
        <div className={styles.csLeft}>
          <picture className={`${styles.csPicture} ${styles.csPicture1}`}>
            <Image src="/images/placeholder.png" alt="house" width="400" height="400" />
          </picture>
          <picture className={`${styles.csPicture} ${styles.csPicture2}`}>
            <Image src="/images/placeholder.png" alt="house" width="400" height="400" />
          </picture>            
        </div>

        <div className={styles.csRight}>
          <span className={styles.csTopper}>About Us</span>
          <h2 className={styles.csTitle}>About Company Title</h2>
          <p className={styles.csText}>
            In consequat tincidunt turpis sit amet imperdiet. Praesent className officelan nonatoureanor mauris laoreet, iaculis
            libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent nonatourean olei
            aptent taciti sociosqu ad litora torquent per.
          </p>
          <p className={styles.csText}>
            In consequat tincidunt turpis sit amet imperdiet. Praesent className officelan nonatoureanor mauris laoreet, iaculis
            libero quis. Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent nonatourean olei
            aptent taciti sociosqu ad litora torquent per.
          </p>
          <div className={styles.csFlexGroup}>
            <p className={styles.csFlexP}>
              In consequat tincidunt turpis sit amet imperdiet. Praesent classNameei consequat tincidunt turpis sit amet
              imperdiet for mind.
            </p>
            <span className={styles.csName}>Justin Time</span>
            <span className={styles.csJob}>CEO-Founder</span>
            <Image
              className={styles.csQuoteIcon}
              loading="lazy"
              decoding="async"
              src="/images/placeholder.png"
              alt="gavel"
              width="136"
              height="77" />
          </div>
          <a href="/about" className={`${styles.buttonSolid} button-solid`}>More About Us</a>
        </div>
      </div>
    </section>

    <section id="cta" className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Get It Done <br/>
          With Us Today
        </h2>
        <p>
          Say something catchy, informative, and encouraging to click the button to go to the contact page. I like to add
          these to the bottom of all pages.
        </p>
        <a href="/contact" className={`${styles.buttonSolid} button-solid`}>Get an Estimate Now</a>
      </div>

      <picture>
        <Image src="/images/placeholder.png" className="cs-picture" width="1920" height="1280" alt="background" />
      </picture>        
    </section>
    </>
  )
}