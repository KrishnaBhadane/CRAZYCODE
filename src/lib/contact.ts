import site from "@/data/site";

export function emailLink(subject = "Let’s build something — Kreepycode") {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
}

export function whatsappLink(message = "Hi Krishna! I’d like to discuss a project with Kreepycode.") {
  return `https://wa.me/${site.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
