import { StickyScroll } from "@/Components/ui/sticky-scroll-reveal";
import FadeUp from "@/Components/animations/FadeUp";

export default function BenefitsSection({ programme }) {
  if (!programme?.benefits?.length) {
    return null;
  }

  const content = programme.benefits.map((benefit, index) => ({
    title: benefit.title,
    description: benefit.description,

    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
        {/* =====================================================
            INNER ABSTRACT CURVES
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            -right-[30%]
            top-[5%]
            h-[90%]
            w-[115%]
            rotate-[30deg]
            rounded-[50%]
            border-2
            border-white/[0.10]
            animate-[benefitCurveOne_8s_ease-in-out_infinite]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -left-[35%]
            top-[20%]
            h-[80%]
            w-[120%]
            rotate-[-25deg]
            rounded-[50%]
            border
            border-primary/[0.45]
            animate-[benefitCurveTwo_10s_ease-in-out_infinite]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -right-[10%]
            top-[25%]
            h-[65%]
            w-[90%]
            rotate-[40deg]
            rounded-[50%]
            border
            border-white/[0.07]
            animate-[benefitCurveThree_12s_ease-in-out_infinite]
          "
        />

        {/* =====================================================
            GLOW
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[45%]
            w-[45%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary
            opacity-[0.15]
            blur-[100px]
            animate-[benefitGlow_5s_ease-in-out_infinite]
          "
        />

        {/* =====================================================
            NUMBER
        ====================================================== */}

        <span
          className="
            relative
            z-10
            select-none
            text-[clamp(7rem,14vw,12rem)]
            font-semibold
            leading-none
            tracking-[-0.08em]
            text-white/[0.09]
            animate-[benefitNumber_6s_ease-in-out_infinite]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    ),
  }));

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--color-primary-deep)]
        py-[clamp(5rem,10vw,9rem)]
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND SYSTEM
      ====================================================== */}

      {/* Large ambient glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-18rem]
          -z-10
          h-[45rem]
          w-[45rem]
          -translate-x-1/2
          rounded-full
          bg-primary
          opacity-[0.10]
          blur-[160px]
          animate-[ambientGlow_12s_ease-in-out_infinite]
        "
      />

      {/* =====================================================
          LARGE PRIMARY CURVE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[30rem]
          top-[-8rem]
          -z-10
          h-[65rem]
          w-[100rem]
          rotate-[18deg]
          rounded-[50%]
          border-[3px]
          border-white/[0.075]
        "
      />

      {/* =====================================================
          SECOND LARGE CURVE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[35rem]
          top-[15%]
          -z-10
          h-[60rem]
          w-[95rem]
          rotate-[-17deg]
          rounded-[50%]
          border-2
          border-primary/[0.25]
        "
      />

      {/* =====================================================
          THIRD CURVE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[20rem]
          top-[35%]
          -z-10
          h-[50rem]
          w-[80rem]
          rotate-[24deg]
          rounded-[50%]
          border
          border-white/[0.10]
        "
      />

      {/* =====================================================
          CROSSING CURVE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[20rem]
          bottom-[-15rem]
          -z-10
          h-[55rem]
          w-[90rem]
          rotate-[12deg]
          rounded-[50%]
          border-[3px]
          border-primary/[0.18]
        "
      />

      {/* =====================================================
          STRONG DIAGONAL STROKES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[22%]
          -z-10
          h-[2px]
          w-[120%]
          rotate-[-8deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.14]
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[68%]
          -z-10
          h-[2px]
          w-[120%]
          rotate-[7deg]
          bg-gradient-to-r
          from-transparent
          via-primary/[0.55]
          to-transparent
        "
      />

      {/* =====================================================
          SMALL TECHNICAL ACCENT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[12%]
          -z-10
          h-24
          w-24
          rounded-full
          border-2
          border-white/[0.08]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[14%]
          -z-10
          h-16
          w-16
          rounded-full
          border
          border-primary/[0.25]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="container">
        <header className="mb-[clamp(3rem,7vw,6rem)] max-w-2xl">
          <FadeUp>
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/50
              "
            >
              What You Get
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="max-w-3xl text-white">
              Everything you need to move from learning to doing.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-xl text-white/60">
              Get practical experience, guidance, and support
              throughout your programme.
            </p>
          </FadeUp>
        </header>

        <StickyScroll content={content} />
      </div>

      {/* =====================================================
          ANIMATION KEYFRAMES
      ====================================================== */}

      <style>{`
        @keyframes benefitCurveOne {
          0%,
          100% {
            transform: rotate(30deg) translate3d(0, 0, 0);
            opacity: 0.45;
          }

          50% {
            transform: rotate(32deg) translate3d(-10px, 8px, 0);
            opacity: 0.8;
          }
        }

        @keyframes benefitCurveTwo {
          0%,
          100% {
            transform: rotate(-25deg) translate3d(0, 0, 0);
            opacity: 0.45;
          }

          50% {
            transform: rotate(-28deg) translate3d(12px, -8px, 0);
            opacity: 0.8;
          }
        }

        @keyframes benefitCurveThree {
          0%,
          100% {
            transform: rotate(40deg) translate3d(0, 0, 0);
            opacity: 0.35;
          }

          50% {
            transform: rotate(43deg) translate3d(-8px, 10px, 0);
            opacity: 0.65;
          }
        }

        @keyframes benefitGlow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.12;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.22;
          }
        }

        @keyframes benefitNumber {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.75;
          }

          50% {
            transform: scale(1.035);
            opacity: 1;
          }
        }

        @keyframes ambientGlow {
          0%,
          100% {
            transform: translateX(-50%) scale(0.9);
            opacity: 0.08;
          }

          50% {
            transform: translateX(-50%) scale(1.1);
            opacity: 0.14;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}