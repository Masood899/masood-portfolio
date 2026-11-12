import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-topline"><span>MASOOD KHAN / PORTFOLIO</span><span>BUILT WITH INTENTION</span></div>
      <div className="footer-main" id="contact">
        <div>
          <p className="eyebrow">HAVE SOMETHING INTERESTING IN MIND?</p>
          <h2>Let&apos;s build<br /><em>something meaningful.</em></h2>
        </div>
        <a className="footer-email" href="mailto:masoodkann899@gmail.com">Get in touch <ArrowUpRight size={18} /></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MASOOD KHAN</span>
        <div className="social-links">
          <a href="https://github.com/Masood899" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /> GitHub</a>
          <a href="https://www.linkedin.com/in/masood-khan-a83a772b3" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /> LinkedIn</a>
          <a href="mailto:masoodkann899@gmail.com" aria-label="Email"><Mail size={16} /> Email</a>
        </div>
        <Link href="/#top" className="back-top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
