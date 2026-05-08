import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  roles?: ("admin" | "client" | "public")[];
}

export const publicNavItems: NavItem[] = [
  { title: "nav.home", href: "/" },
  { title: "nav.services", href: "/#haccp" },
  { title: "nav.about", href: "/#security" },
  { title: "nav.contact", href: "/contact" },
];

export const privateNavItems: NavItem[] = [
  { title: "nav.dashboard_haccp", href: "/haccp" },
  { title: "nav.dashboard_psych", href: "/psychology" },
  { title: "nav.settings", href: "/settings" },
];
