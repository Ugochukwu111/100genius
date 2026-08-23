import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppIcon.css";

export default function WhatsAppIcon() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Don't show until the user has scrolled a little
      if (window.scrollY < 150) {
        setVisible(false);
        return;
      }

      setVisible(true);

      // Reset the timer every time the user scrolls
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <a
      className={`whatsapp-icon ${visible ? "show" : "hide"}`}
      href="https://api.whatsapp.com/send/?phone="
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
    >
      <FaWhatsapp size={50} />
    </a>
  );
}