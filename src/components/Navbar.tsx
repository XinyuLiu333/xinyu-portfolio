import Link from "next/link";
import AskXinyuToggle from "./AskXinyuToggle";
import GateLockToggle from "./GateLockToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg-primary/80 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-medium text-text-primary hover:text-accent transition-colors"
        >
          Xinyu Liu
        </Link>
        <div className="flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Contact
          </a>
          <GateLockToggle />
          <AskXinyuToggle />
        </div>
      </div>
    </nav>
  );
}
