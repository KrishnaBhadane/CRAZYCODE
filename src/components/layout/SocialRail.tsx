import site from "@/data/site";
import { emailLink, whatsappLink } from "@/lib/contact";
import styles from "./SocialRail.module.css";

const icons = {
  Instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r=".8" fill="currentColor" /></>,
  Gmail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  WhatsApp: <><path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.5-5A8 8 0 1 1 20 11.5Z" /><path d="M8 7c-2 3 3 8 6 8l2-2-3-1-1 1-2-2 1-1-1-3Z" /></>,
  LinkedIn: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4" /><circle cx="7" cy="7" r=".7" fill="currentColor" /></>,
};

export default function SocialRail() {
  const links = [
    { name: "Instagram" as const, href: undefined },
    { name: "Gmail" as const, href: emailLink() },
    { name: "WhatsApp" as const, href: whatsappLink() },
    { name: "LinkedIn" as const, href: site.socials.find(s => s.label === "LinkedIn")?.href },
  ];
  return <nav className={styles.rail} aria-label="Quick contact">
    {links.map(({ name, href }) => {
      const icon = <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
      return href ? <a key={name} href={href} aria-label={name} title={name} target={name === "Gmail" ? undefined : "_blank"} rel="noopener noreferrer">{icon}</a> : <span key={name} className={styles.unavailable} role="img" aria-label="Instagram — coming soon" title="Instagram — coming soon">{icon}</span>;
    })}
  </nav>;
}
