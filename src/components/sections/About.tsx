import Image from "next/image";
import Impact from "./Impact";
import site from "@/data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <h2 id="about-title">GOOD PEOPLE.<br /><span>GOOD INTERNET.</span></h2>
          </div>
          <div className={styles.story}>
            <span className={styles.asterisk} aria-hidden="true">✳</span>
            <p>Kreepycode is an independent web & design studio for people building something of their own.</p>
            <p>We turn your ideas into thoughtful websites with a clear point of view. A little personality, a lot of care, and details that feel just as good on a phone as they do on a big screen.</p>
            <a href="#contact">Got something in mind? Let’s talk. <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className={styles.proof}>
          <Impact />
          <aside className={styles.note}>
            <div className={styles.noteTop}><span>A NOTE FROM THE STUDIO</span><Image src={site.logo} alt="" width={43} height={47} /></div>
            <h3>SMALL BY CHOICE.<br />BIG ON THE DETAILS.</h3>
            <p>The first impression. The way a button feels. That one last pixel. It all matters.</p>
            <span className={styles.signature}>That’s the Kreepycode spirit.</span>
          </aside>
        </div>
      </div>
    </section>
  );
}
