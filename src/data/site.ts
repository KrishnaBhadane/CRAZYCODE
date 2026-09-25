// Shared studio details, navigation, and user-supplied figures.

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  logo: string; // path relative to /public
  nav: NavLink[];
  socials: { label: string; href: string }[];
  impact: { value: number; suffix: string; label: string; note: string }[];
  contact: { email: string; phone: string };
}

const site: SiteConfig = {
  name: "Kreepycode",
  description:
    "Kreepycode is an independent web design and development studio creating responsive websites, full-stack web apps, and thoughtful digital experiences.",
  logo: "/images/ghost.svg",
  nav: [
    { label: "About",    href: "#about"    },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Pricing",  href: "#pricing"  },
    { label: "Contact",  href: "#contact"  },
  ],
  // Figures supplied by the studio; keep these in sync with completed work.
  impact: [
    { value: 10, suffix: "+", label: "Projects", note: "From an idea to a place on the internet." },
    { value: 3, suffix: "+", label: "Districts reached", note: "Local connections. A wider creative footprint." },
  ],
  contact: {
    email: "krishnabhadane0@gmail.com",
    phone: "+917721809430",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/krushna-bhadane-015963386/" },
    { label: "GitHub", href: "https://github.com/KrishnaBhadane" },
  ],
};

export default site;
