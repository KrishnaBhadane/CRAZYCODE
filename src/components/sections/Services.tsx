import { services } from "@/data/services";
import FAQ from "./FAQ";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className={styles.services}>
      <div className={styles.inner}>
        <h2 id="services-title" className={styles.title}>SERVICES<span>.</span></h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.service} key={service.title}>
              <span className={styles.symbol} aria-hidden="true">{service.symbol}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <FAQ />
      </div>
    </section>
  );
}
