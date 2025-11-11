import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div>
        <h3 className={styles.footerSectionTitle}>Visit</h3>
        <a href="/" className={styles.footerLink}>Home</a>
        <a href="/about" className={styles.footerLink}>About</a>
        <a href="/services" className={styles.footerLink}>Services</a>
        <a href="/contact" className={styles.footerLink}>Contacts</a>
      </div>

      <p className={styles.copyright}>
        © 2025 Elimo Solutions. All rights reserved.
      </p>

      <a href="mailto:info@elimosolutions.com" className={styles.footerLink}>
        info@elimosolutions.com
      </a>

    </footer>
  );
}
