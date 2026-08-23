const mentors = [
  {
    category: "WEB DEV",
    initials: "PA",
    name: "Pascal",
    role: "SOFTWARE ENGINEER",
    description:
      "5+ years building production web apps. Mentored 80+ students into junior and mid-level engineering roles.",
  },
  {
    category: "AI/ML",
    initials: "OJ",
    name: "Ohema Jessica",
    role: "AI/ML SPECIALIST",
    description:
      "Machine learning engineer with experience at top African tech companies. Breaks down complex models into teachable moments.",
  },
  {
    category: "DESIGN",
    initials: "JA",
    name: "James",
    role: "GRAPHIC & PRODUCT DESIGNER",
    description:
      "Product designer with a decade of client work. Teaches the design thinking process used at leading product studios.",
  },
];

// Duplicate list to ensure a seamless infinite loop
const marqueeMentors = [...mentors, ...mentors];

export default function MentorsSection() {
  return (
    <section className="section-spacing overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Column: Heading & Value Proposition */}
          <div className="max-w-[480px]">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              You're not learning from a course. You're learning from the people
              doing the work.
            </h2>

            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Every mentor is a working professional first, and a teacher
              second. Get direct access to industry insights and real-world feedback.
            </p>
          </div>

          {/* Right Column: Infinite Marquee Carousel with Edge Fades */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex gap-6 py-4">
              {marqueeMentors.map((mentor, index) => (
                <article
                  key={`${mentor.initials}-${index}`}
                  className="group relative flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-dark/80 to-primary-deep/90 p-6 text-background shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl sm:w-[360px]"
                >
                  <div>
                    {/* Badge */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="inline-block rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-300">
                        {mentor.category}
                      </span>
                    </div>

                    {/* Avatar & Names */}
                    <div className="flex  items-center gap-4 flex-col text-center">
                      <div className="w-20 h-20 rounded-full border flex items-center justify-center">
                        {mentor.initials}
                      </div>

                      <div className="min-w-0">
                        <h4 className="truncate text-lg font-bold leading-snug text-background">
                          {mentor.name}
                        </h4>
                        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-green-300">
                          {mentor.role}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-sm leading-relaxed text-surface/90">
                      {mentor.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}