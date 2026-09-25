import styles from "./SpiritOrb.module.css";

// CSS geometry keeps the sculpture light: no model downloads or WebGL runtime.
export default function SpiritOrb() {
  return <div className={styles.scene} aria-hidden="true"><div className={styles.orb}>
    <i /><i /><i /><i /><span>✳</span>
  </div><div className={styles.shadow} /></div>;
}
