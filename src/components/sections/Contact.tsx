import ContactForm from "@/components/contact/ContactForm";
import SpiritOrb from "@/components/visuals/SpiritOrb";
import { emailLink } from "@/lib/contact";
import site from "@/data/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <div className={styles.headingArt}>
              <h2 id="contact-title">LET’S MAKE<br />SOMETHING<br /><span>GOOD.</span></h2>
              <div className={styles.sculpture}><SpiritOrb /></div>
            </div>
            <a className={styles.email} href={emailLink()}>{site.contact.email} <span aria-hidden="true">↗</span></a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
