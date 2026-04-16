export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-32">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-serif text-2xl text-text-primary mb-8">
          Let&rsquo;s connect
        </p>
        <div className="flex items-center justify-center gap-8 text-sm">
          <a
            href="mailto:xyliu115@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/xliu02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/xinyu-liu-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
        <p className="mt-8 text-sm text-text-muted">
          Have questions? Try{" "}
          <a href="/ask" className="text-text-secondary hover:text-accent transition-colors">Ask Xinyu</a> —
          an AI proxy that answers based on real work.
        </p>
        <p className="mt-6 text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Xinyu Liu
        </p>
      </div>
    </footer>
  );
}
