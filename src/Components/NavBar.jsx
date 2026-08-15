import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About Us", href: "/about-us" },
  { label: "How It Works", href: "/how-it-works" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const location = useLocation();

  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const updateUnderline = () => {
      const activeIndex = navLinks.findIndex(
        (link) => link.href === location.pathname,
      );

      if (activeIndex === -1) return;

      const activeLink = linkRefs.current[activeIndex];
      const nav = navRef.current;

      if (!activeLink || !nav) return;

      // Don't calculate the desktop underline on mobile
      if (window.innerWidth < 768) {
        setUnderline({
          left: 0,
          width: 0,
        });
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setUnderline({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    };

    updateUnderline();

    window.addEventListener("resize", updateUnderline);

    return () => {
      window.removeEventListener("resize", updateUnderline);
    };
  }, [location.pathname]);

  return (
    <nav className="bg-[image:var(--gradient-primary)]">
      <div className="container relative z-100 flex items-center justify-between gap-10">
        {/* Logo */}
        <NavLink to="/" className="h-14 w-14">
          <img src={logo} alt="100 Genius" />
        </NavLink>

        {/* Navigation */}
        <div
          className={`
            flex flex-1

            max-md:absolute
            max-md:top-18
            max-md:left-0
            max-md:right-0
            max-md:z-50
            max-md:flex-col
            max-md:bg-primary-deep
            max-md:px-2
            max-md:pb-8
            max-md:min-h-[calc(100dvh-4.5rem)]
            max-md:transition-all
            max-md:duration-300
            max-md:ease-out

            ${
              isMenuOpen
                ? "max-md:translate-y-0 max-md:opacity-100"
                : "max-md:pointer-events-none max-md:-translate-y-1 max-md:opacity-0"
            }
          `}
        >
          <ul
            ref={navRef}
            className="
              relative
              flex
              h-fit
              flex-1
              items-center
              gap-1
              p-1

              max-md:flex-col
            "
          >
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`
                  max-md:w-full
                  max-md:text-center
                  max-md:transition-all
                  max-md:duration-300

                  ${
                    isMenuOpen
                      ? "max-md:translate-y-0 max-md:opacity-100"
                      : "max-md:-translate-y-3 max-md:opacity-0"
                  }
                `}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 80}ms`
                    : `${(navLinks.length - index) * 40}ms`,
                }}
              >
                <NavLink
                  ref={(element) => {
                    linkRefs.current[index] = element;
                  }}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                      block
                      px-3
                      py-2
                      font-semibold
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? "text-background"
                          : "text-surface-muted hover:text-background"
                      }

                      max-md:py-5
                      max-md:hover:bg-[#010a04]
                    `
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Shared moving underline — desktop only */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-0
                h-0.5
                rounded-full
                bg-background
                transition-all
                duration-300
                ease-out

                max-md:hidden
              "
              style={{
                left: underline.left,
                width: underline.width,
              }}
            />
          </ul>

          {/* Apply button */}
          <Link
            to="/apply"
            onClick={() => setIsMenuOpen(false)}
            className={`
              cta-1

              max-md:justify-center
              max-md:transition-all
              max-md:duration-500
              max-md:ease-out

              ${
                isMenuOpen
                  ? "max-md:translate-y-0 max-md:opacity-100"
                  : "max-md:translate-y-8 max-md:opacity-0"
              }
            `}
            style={{
              transitionDelay: isMenuOpen ? "320ms" : "0ms",
            }}
          >
            <span>Apply Now</span>
            <ArrowRight strokeWidth={1.5} size={18} />
          </Link>

          {/* Bottom mobile handle */}
          <span
            aria-hidden="true"
            className={`
              absolute
              bottom-2
              left-1/2
              h-1
              w-12
              -translate-x-1/2
              rounded
              bg-white
              transition-all
              duration-300
              ease-out

              md:hidden

              ${
                isMenuOpen
                  ? "max-md:scale-x-100 max-md:opacity-100"
                  : "max-md:scale-x-0 max-md:opacity-0"
              }
            `}
            style={{
              transitionDelay: isMenuOpen ? "500ms" : "0ms",
            }}
          />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="block md:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          <Menu strokeWidth={1.5} className="text-background" />
        </button>
      </div>
    </nav>
  );
}