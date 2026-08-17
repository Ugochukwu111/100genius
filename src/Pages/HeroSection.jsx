import { ArrowRight, Search } from "lucide-react";
import heroImage from "@/assets/home/hero-img.webp";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-dvh
        items-center
        bg-cover
        bg-center
        bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="
         
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[image:var(--gradient-hero)]
        "
      />

      {/* Content */}
      <div className="container relative z-10 flex-1 ">
        <div className="max-w-[650px] flex flex-col gap-3  max-md:gap-14 ">
          <h1 className="fw-extrabold text-background text-shadow-lg">
            Turn Your Tech Ambition 
            <span className="text-green-400"> Into a Paying Career </span>
            in 6 Months
          </h1>

          <p className="text-surface">
            Join 500+ graduates who built real skills, real portfolios, and
            landed real jobs through hands-on mentorship in Full-Stack Web Dev,
            Data Analytics, UI/UX Design, and Cybersecurity.
          </p>

          <div className="flex gap-4 flex-wrap  max-md:flex-col">
            <Link to="" className="cta-1 flex-1 justify-center items-center ">
              Apply For The Next Cohort
              <ArrowRight strokeWidth={1.5} size={18} />
            </Link>
            <Link
              to=""
              className="flex-1 text-background  border-2 border-text-background text-center flex justify-center items-center gap-2 hover:text-primary transition-all duration-200 ease-out hover:bg-background hover:border-text-background py-1.5"
            >
              Explore Programmes <Search size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
