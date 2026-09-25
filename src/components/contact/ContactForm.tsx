"use client";

import { useState, type FormEvent } from "react";
import site from "@/data/site";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent("Project enquiry — Kreepycode")}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return (
    <form className={styles.form} onSubmit={prepareEmail}>
      <h3>YOUR NEXT BIG THING<span>↗</span></h3>
      <div className={styles.row}>
        <label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="What should I call you?" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@example.com" /></label>
      </div>
      <div className={styles.row}>
        <label>What are we making?<select name="project" defaultValue="" required><option value="" disabled>Choose a project</option><option>Frontend website</option><option>Full-stack app</option><option>UI/UX design</option><option>SEO & performance</option><option>Help with an existing project</option></select></label>
        <label>Budget<select name="budget" defaultValue="Not sure yet"><option>Not sure yet</option><option>Under ₹15,000</option><option>₹15,000–₹35,000</option><option>₹35,000–₹60,000</option><option>₹60,000+</option><option>Hourly support</option></select></label>
      </div>
      <label>The idea<textarea name="message" required rows={4} maxLength={2000} placeholder="What do you need, and when do you need it?" /></label>
      <button type="submit">Continue in email <span aria-hidden="true">↗</span></button>
      <p>Your email app opens with your brief. Review it and press Send there.</p>
      <p role="status">{opened ? "Email draft requested. If nothing opened, email me directly using the link alongside this form. Your brief is still here." : ""}</p>
    </form>
  );
}
