import { faqs } from "@/data/services";
import styles from "./Services.module.css";

export default function FAQ() {
  return (
    <div className={styles.faq} aria-labelledby="faq-title">
      <h2 id="faq-title" className={styles.title}>FAQ<span>?</span><span className="sr-only"> Frequently asked questions</span></h2>
      <div className={styles.questions}>
        {faqs.map((faq) => (
          <details key={faq.question} name="studio-faq" className={styles.question}>
            <summary>{faq.question}<span aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
