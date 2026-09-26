import logo from "../../assets/logo.png";

import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/fineartsnith/",
    label: "Instagram",
  },

  {
    icon: FaFacebook,
    url: "https://www.facebook.com/FineArtsClubNitHamirpur/",
    label: "Facebook",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/fineartsnith/",
    label: "LinkedIn",
  },
];


export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <img
          src={logo}
          alt="FineArts Club logo"
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* <p className="text-[var(--muted-foreground)] text-sm text-center">
                    FineArts  · NIT-Hamirpur
                  </p> */}

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-6 text-center">
        <p className="text-[var(--muted-foreground)] text-xs">
          © 2026 FineArts Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
