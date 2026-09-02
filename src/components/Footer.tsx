import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer__inner">
        <div className="footer__brand">
          <span>Kawari Company</span>

          <p>
            Safeguarding · Regulation · Independent Review
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <Link href="#expertise">Expertise</Link>
          <Link href="#sectors">Sectors</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

        <div className="footer__meta">
          <p>© {new Date().getFullYear()} Kawari Company</p>

          <p>
            Website by{" "}
            <a
              href="https://irisoak.dev"
              target="_blank"
              rel="noreferrer"
            >
              Iris & Oak
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}