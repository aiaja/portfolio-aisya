import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo & credit */}
          <div className="text-center md:text-left">
            <p className="text-green-primary font-bold text-lg">aisya.dev</p>
            <p className="text-charcoal/50 text-xs mt-1 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart size={10} className="text-pink-primary fill-pink-primary" /> by Aisya Nur Syakbani
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aiaja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/50 hover:text-green-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/aisyanrs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/50 hover:text-green-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:aisyafirst@gmail.com"
              className="text-charcoal/50 hover:text-green-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-charcoal/40 text-xs">
            © {new Date().getFullYear()} Aisya Nur Syakbani. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}