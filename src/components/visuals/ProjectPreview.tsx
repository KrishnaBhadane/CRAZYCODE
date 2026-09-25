import Image from "next/image";
import site from "@/data/site";
import styles from "@/components/sections/Projects.module.css";

export type ProjectPreviewKind = "next" | "spirit" | "wraps" | "code";

export default function ProjectPreview({ kind }: { kind: ProjectPreviewKind }) {
  return (
    <div className={styles.preview} data-kind={kind} aria-hidden="true">
      {kind === "next" && <>
        <span className={styles.bigType}>NEXT<br />UP<span className={styles.red}>.</span></span>
        <svg className={styles.arrow} viewBox="0 0 160 160" fill="none"><path d="M28 132 132 28M30 28h102v102" stroke="currentColor" strokeWidth="15" /></svg>
        <span className={styles.cornerStar}>✳</span>
      </>}
      {kind === "spirit" && <>
        <div className={styles.orbit} />
        <div className={styles.ghostDisc}><Image src={site.logo} alt="" width={185} height={200} /></div>
        <span className={styles.spiritType}>IN THE<br />MAKING.</span>
        <span className={styles.orbitStar}>✳</span>
      </>}
      {kind === "wraps" && <>
        <span className={styles.outlineType}>UNDER<br />WRAPS.</span>
        <span className={styles.tape}>COMING SOON ✳ COMING SOON ✳</span>
        <span className={styles.tape}>COMING SOON ✳ COMING SOON ✳</span>
      </>}
      {kind === "code" && <>
        <span className={styles.codeMark}>&lt;✳&gt;</span>
        <span className={styles.codeType}>WATCH<br />THIS SPACE.</span>
        <span className={styles.cursor} />
      </>}
    </div>
  );
}

