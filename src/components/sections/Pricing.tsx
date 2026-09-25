import { packages, hourlyRate, formatPrice, projectGuide } from "@/data/pricing";
import { emailLink } from "@/lib/contact";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className={styles.pricing}>
      <div className={styles.inner}>
        <h2 id="pricing-title" className={styles.title}>PRICING<span>.</span></h2>
        <div className={styles.packages}>
          {packages.map((plan) => (
            <article className={styles.plan} data-plan={plan.id} key={plan.id}>
              <h3>{plan.name}<span>.</span></h3>
              <p className={styles.description}>{plan.description}</p>
              <div className={styles.price}><span>Starting at</span><strong>{formatPrice(plan.price)}</strong><span>per project</span></div>
              <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>)}</ul>
              <p className={styles.scope}>{plan.scope}</p>
              <a className={styles.cta} href={emailLink(`${plan.name} project enquiry — Kreepycode`)}>{plan.action}<span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <div className={styles.hourly}>
          <div><h3>PROJECT WORK</h3><p>Small fixes, new features, or an extra pair of hands.</p></div>
          <p className={styles.hourlyPrice}>{formatPrice(hourlyRate)}<span>/ hour</span></p>
          <a href={emailLink("Hourly project work — Kreepycode")}>Discuss a task <span aria-hidden="true">↗</span></a>
        </div>
        <p className={styles.terms}>Prices are in INR. The final quote depends on scope and complexity. Domain, hosting, and paid services are separate. Hourly tasks are estimated before work starts.</p>
        <div className={styles.guide}>
          {projectGuide.map((item) => <details name="project-guide" key={item.title}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.description}</p></details>)}
        </div>
      </div>
    </section>
  );
}
