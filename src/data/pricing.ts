// Starter quotes for limited scopes. Confirm the final price after reviewing the brief.
export const packages = [
  {
    id: "frontend",
    name: "Frontend",
    price: 12000,
    description: "A distinctive website for your business, portfolio, or next idea.",
    features: ["Up to 3 simple pages", "Responsive UI and light interactions", "Basic on-page SEO setup", "2 rounds of design refinements", "Source code and deployment guidance"],
    scope: "For a presentation website. Accounts, databases, and custom backend features are separate.",
    action: "Let’s build your website",
  },
  {
    id: "fullstack",
    name: "Full stack",
    price: 35000,
    description: "A focused web app with a frontend and the logic behind it.",
    features: ["Up to 3 core app screens", "Basic sign-in and user accounts", "Database and one core workflow", "A simple admin view", "Source code and deployment guidance"],
    scope: "For a small, clearly scoped app. Payments, complex roles, and larger integrations need a custom quote.",
    action: "Let’s discuss your app",
  },
] as const;

export const hourlyRate = 750;
export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export const projectGuide = [
  { title: "What is frontend?", description: "The part people see and use: pages, buttons, layouts, and interactions. Choose it for a portfolio, landing page, or business website that doesn’t need its own login or database." },
  { title: "What is full stack?", description: "The frontend plus the behind-the-scenes logic and data storage. Choose it for a booking tool, member portal, dashboard, or a small app where people sign in and save information." },
  { title: "What counts as project work?", description: "Focused help with an existing build: fixing a bug, adding a screen, connecting an API, improving accessibility, or speeding up a page. We agree on the task and estimated hours first." },
];
