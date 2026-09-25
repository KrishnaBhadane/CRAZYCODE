import site from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}><a href="#hero" className={styles.wordmark} aria-label="Kreepycode — back to top">KREEPYCODE<span>✳</span></a><a className={styles.back} href="#hero">Back to top ↗</a></div>
        <div className={styles.bottom}>
          <p>Independent spirit. Thoughtful websites.</p>
          <nav aria-label="Footer social links">{site.socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">{social.label} ↗</a>)}</nav>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
