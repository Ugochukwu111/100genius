import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa6";
import logo from "@/assets/logo.webp";

const socialLinks = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me",
    icon: FaWhatsapp,
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://tiktok.com",
    icon: FaTiktok,
  },
  {
    id: "mail",
    name: "Email",
    url: "mailto:your@email.com",
    icon: FaEnvelope,
  },
];

const footerLinks = [
  {
    title: "Programs",
    links: [
      { label: "Our Programs", href: "/programs" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Apply Now", href: "/apply" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email Us", href: "mailto:hello@100genius.africa" },
      { label: "WhatsApp", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="grid-background bg-primary px-5 py-15">
      <div className="container">
        {/* Upper footer */}
        <div className="flex flex-wrap items-start gap-10">
          {/* Brand */}
          <div className="min-w-[280px] flex-[1_1_280px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <figure className="w-15 rounded">
                  <img src={logo} alt="100 Genius Academy" />
                </figure>

                <div>
                  <h5 className="font-extrabold text-background">
                    100 Genius Academy
                  </h5>

                  <p className="text-background">
                    <em>
                      Remote first, Lagos based Tech Boot Camp Training
                    </em>
                  </p>
                </div>
              </div>

              {/* Social links */}
              <ul className="flex flex-wrap items-center gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        aria-label={link.name}
                        className="flex h-12 w-12 items-center justify-center rounded-full text-background transition-transform duration-200 hover:-translate-y-1"
                      >
                        <Icon size={25} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Footer link groups */}
          <div className="grid flex-[2_1_500px] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-5">
            {footerLinks.map((section) => (
              <div key={section.title} className="px-5 py-4">
                <h6 className="mb-2 font-bold text-background">
                  {section.title}
                </h6>

                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-surface-muted transition-colors duration-200 hover:text-background"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 text-background" />

        {/* Lower footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-background">
          <p>
            &copy; 2026 100 Genius Academy. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/privacy"
              className="transition-colors hover:text-surface-muted"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-surface-muted"
            >
              Terms Of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}