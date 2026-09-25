import CountUp from "@/components/visuals/CountUp";
import site from "@/data/site";
import styles from "./About.module.css";

export default function Impact() {
  return (
    <div id="impact" className={styles.stats} aria-label="The studio in numbers">
      {site.impact.map((stat) => (
        <div className={styles.stat} key={stat.label}>
          <CountUp value={stat.value} suffix={stat.suffix} />
          <h3>{stat.label}</h3>
          <p>{stat.note}</p>
        </div>
      ))}
    </div>
  );
}
