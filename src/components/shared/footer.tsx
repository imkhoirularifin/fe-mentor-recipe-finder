import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

const links = [
  {
    icon: "linkedin" as const,
    href: "https://www.linkedin.com/in/moh-khoirul-arifin",
  },
  {
    icon: "github" as const,
    href: "https://github.com/imkhoirularifin",
  },
];

export default function Footer() {
  return (
    <footer className="section-container mt-400 mb-250 justify-between gap-300 md:my-500 md:flex-row">
      <div className="flex flex-row items-center gap-200">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            className="hover:bg-x-neutral-200 rounded-md px-1.5 py-1.5"
          >
            <DynamicIcon
              name={link.icon}
              size={24}
              color="var(--colors-x-neutral-900)"
            />
          </Link>
        ))}
      </div>

      <p>Made with ❤️ and 🍵</p>
    </footer>
  );
}
