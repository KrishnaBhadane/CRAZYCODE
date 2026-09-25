import ProjectPreview from "@/components/visuals/ProjectPreview";
import styles from "./Projects.module.css";

const previews = ["next", "spirit", "wraps", "code"] as const;

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className={styles.projects}>
      <div className={styles.inner}>
        <h2 id="projects-title">PROJECTS<span>.</span></h2>
        <div className={styles.grid}>
          {previews.map((kind, index) => (
            <article className={styles.card} key={kind} aria-labelledby={`project-${index + 1}`}>
              <ProjectPreview kind={kind} />
              <div className={styles.caption}>
                <h3 id={`project-${index + 1}`}>Project 0{index + 1}</h3>
                <span className={styles.status}><span aria-hidden="true" />Coming soon</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
