import { useState } from "react";
import heroBg from "./assets/ofspace-llc-I96XlMeU4oY-unsplash.jpg";
// import locationBg from "./assets/ofspace-llc-pG_ke9wE4sQ-unsplash.jpg";
import bottomctaBg from "./assets/bottomctaBg.jpg";

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const C = {
  navy: "#000000",
  navyMid: "#1A1A1A",
  gold: "#C9A84C",
  goldLt: "#F5EDD6",
  cream: "#FAF8F3",
  white: "#FFFFFF",
  ink: "#1C1C1C",
  mist: "#F0EDE6",
  stone: "#7A7060",
  border: "#E2DDD4",
  hl: "#B8540A",
};

/* ─── Shared atoms ───────────────────────────────────────────────────────────── */
const Wrap = ({ children, className = "" }) => (
  <div
    className={`max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] ${className}`}
  >
    {children}
  </div>
);

const Eyebrow = ({ label, dark = false, center = false }) => (
  <div
    className={`inline-flex items-center gap-2.5 mb-4 ${center ? "justify-center" : ""}`}
  >
    <div
      className="w-7 h-px flex-shrink-0"
      style={{ background: dark ? "rgba(201,168,76,0.5)" : C.gold }}
    />
    <span
      className="text-[11px] font-semibold tracking-[2.5px] uppercase"
      style={{ color: C.gold }}
    >
      {label}
    </span>
  </div>
);

const Display = ({ children, light = false, className = "" }) => (
  <h2
    className={`font-bold leading-[1.12] tracking-tight ${className}`}
    style={{
      fontFamily: "'Playfair Display',Georgia,serif",
      fontSize: "clamp(26px,3.5vw,44px)",
      color: light ? "#fff" : C.navy,
    }}
  >
    {children}
  </h2>
);

const Em = ({ children }) => (
  <em style={{ color: C.gold, fontStyle: "italic" }}>{children}</em>
);
const Hl = ({ children }) => (
  <strong style={{ color: C.hl, fontWeight: 700 }}>{children}</strong>
);

const Lead = ({ children, light = false, className = "" }) => (
  <p
    className={`text-base leading-[1.75] font-light max-w-[540px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}
  >
    {children}
  </p>
);

const LogoMark = ({ size = 34 }) => (
  <div
    className="flex items-center justify-center flex-shrink-0 rounded-sm"
    style={{ width: size, height: size, background: C.navy }}
  >
    <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
      <rect x="2" y="2" width="6" height="6" rx="1" fill={C.gold} />
      <rect
        x="10"
        y="2"
        width="6"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.4)"
      />
      <rect
        x="2"
        y="10"
        width="6"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.4)"
      />
      <rect
        x="10"
        y="10"
        width="6"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />
    </svg>
  </div>
);

const GridBg = ({ opacity = 0.05, size = 60 }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(rgba(201,168,76,${opacity}) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,${opacity}) 1px,transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }}
  />
);

const Stars = () => (
  <div className="flex gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 12 12" width="13" height="13" fill={C.gold}>
        <path d="M6 1l1.5 3L11 4.5l-2.5 2.4.6 3.4L6 8.6l-3.1 1.7.6-3.4L1 4.5 4.5 4z" />
      </svg>
    ))}
  </div>
);

const GoldCheckPill = () => (
  <span
    className="inline-flex flex-shrink-0 items-center justify-center w-4 h-4 rounded-full border"
    style={{ background: "rgba(201,168,76,0.15)", borderColor: C.gold }}
  >
    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
    </svg>
  </span>
);

const secPy = "py-16 md:py-[88px]";

/* ══════════════════════════════════════════════════════════════════════════════
   ANNOUNCE BANNER
══════════════════════════════════════════════════════════════════════════════ */
const AnnounceBanner = () => (
  <div
    className="text-center px-4 py-2.5 text-[12px] sm:text-[13px] relative z-10"
    style={{ background: C.navy, color: "rgba(255,255,255,0.8)" }}
  >
    <strong style={{ color: C.gold }}>17 years</strong> of industry-led
    training. Now enrolling —{" "}
    <a
      href="#enrol"
      className="font-semibold text-white underline underline-offset-[3px]"
    >
      5 seats per batch →
    </a>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════════════════════════════ */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const scroll = (id) => {
    setOpen(false);
    if (id === "#") return;
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + scrollY - 68,
        behavior: "smooth",
      });
  };
  const links = [
    { label: "Our Story", id: "origin" },
    { label: "Our Model", id: "model" },
    { label: "Locations", id: "locations" },
    { label: "Graduate Voices", id: "voices" },
    { label: "FAQ", id: "faq" },
  ];
  return (
    <nav
      className="sticky top-0 z-[100] border-b"
      style={{ background: C.cream, borderColor: C.border }}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-[60px] h-[64px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 no-underline flex-shrink-0"
        >
          <LogoMark />
          <div className="flex flex-col">
            <strong
              className="font-bold text-[15px] leading-[1.1] tracking-[-0.3px]"
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                color: C.navy,
              }}
            >
              CodersBloom
            </strong>
            <span
              className="text-[9px] font-medium tracking-[1.5px] uppercase"
              style={{ color: C.stone }}
            >
              Training & Placement
            </span>
          </div>
          <div className="border h-10 border-l-2 border-gray-700"></div>
          <div className="flex flex-col">
            <strong
              className="font-bold text-[15px] leading-[1.1] tracking-[-0.3px]"
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                color: C.navy,
              }}
            >
              17+
            </strong>
            <span
              className="text-[9px] font-medium tracking-[1.5px] uppercase"
              style={{ color: C.stone }}
            >
              years
            </span>
          </div>
        </a>

        {/* Est. badge (desktop) */}
        <div
          className="hidden md:flex items-center gap-2 px-3.5 py-1.5 border rounded-sm flex-shrink-0"
          style={{ borderColor: C.border, background: C.goldLt }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle
              cx="6.5"
              cy="6.5"
              r="5.5"
              stroke={C.gold}
              strokeWidth="1.2"
            />
            <path
              d="M6.5 3.5v3l2 1.5"
              stroke={C.gold}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="text-[11px] font-bold tracking-[0.8px] uppercase whitespace-nowrap"
            style={{ color: "#7A5A10" }}
          >
            Est. 2009 · Hyderabad
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex list-none items-center gap-0.5">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scroll(l.id)}
                className="text-[13px] font-medium px-3.5 py-1.5 rounded-sm cursor-pointer border-none bg-transparent transition-colors duration-150"
                style={{ color: C.stone }}
                onMouseEnter={(e) => (e.target.style.color = C.navy)}
                onMouseLeave={(e) => (e.target.style.color = C.stone)}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scroll("enrol")}
              className="ml-2 text-[13px] font-semibold px-5 py-2 rounded-sm text-white cursor-pointer border-none"
              style={{ background: C.navy }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = C.navyMid)
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = C.navy)}
            >
              Enroll Now
            </button>
          </li>
        </ul>

        {/* Mobile right */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#enrol"
            className="text-[12px] font-semibold px-4 py-1.5 rounded-sm text-white no-underline"
            style={{ background: C.navy }}
          >
            Enroll
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 border-none bg-transparent cursor-pointer"
            aria-label="Menu"
          >
            <span
              className="block w-5 h-[2px] mx-auto transition-all duration-200"
              style={{
                background: C.navy,
                transform: open ? "rotate(45deg) translate(5px,5px)" : "",
              }}
            />
            <span
              className="block w-5 h-[2px] mx-auto transition-all duration-200"
              style={{ background: C.navy, opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[2px] mx-auto transition-all duration-200"
              style={{
                background: C.navy,
                transform: open ? "rotate(-45deg) translate(5px,-5px)" : "",
              }}
            />
          </button>
        </div>
      </div>
      {open && (
        <div
          className="lg:hidden border-t flex flex-col px-5 pb-4 pt-2"
          style={{ background: C.cream, borderColor: C.border }}
        >
          {links.map((l, i) => (
            <button
              key={l.id}
              onClick={() => scroll(l.id)}
              className="text-left text-[15px] font-medium py-3 bg-transparent border-none cursor-pointer w-full"
              style={{
                color: C.navy,
                borderBottom:
                  i < links.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const stats = [
    { n: "2,000+", l: "Careers Transformed" },
    { n: "17+", l: "Years Running" },
    { n: "Max 10", l: "Per Batch" },
    { n: ">5", l: "Interviews to Offer" },
    { n: "30 LPA", l: "Highest Salary Offered" },
    { n: "50+", l: "Companies Hired So Far" },
  ];
  return (
    <section
      className="relative overflow-hidden min-h-[560px] flex items-center"
      style={{
        background: C.navy,
        backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${heroBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: C.gold }}
      />
      <GridBg opacity={0.06} />
      {/* Large decorative "17" — desktop only */}
      <div
        className="absolute right-10 bottom-[-20px] select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: 340,
          fontWeight: 700,
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          letterSpacing: -20,
        }}
      >
        17
      </div>

      <Wrap className="relative z-10 py-[90px] sm:py-[110px]">
        <div className="inline-flex items-center gap-2.5 mb-7 sm:mb-8">
          <div
            className="w-8 h-px flex-shrink-0"
            style={{ background: C.gold }}
          />
          <span
            className="text-[10px] sm:text-[11px] font-semibold tracking-[2.5px] uppercase"
            style={{ color: C.gold }}
          >
            Who We Are
          </span>
        </div>

        <h1
          className="font-bold leading-[1.06] tracking-[-1.5px] mb-7 text-white"
          style={{
            fontFamily: "'Playfair Display',Georgia,serif",
            fontSize: "clamp(36px,5.5vw,72px)",
          }}
        >
          Where Industry Experts
          <br />
          Carve the Next Generation
          <br />
          of <em style={{ color: C.gold }}>Professionals.</em>
        </h1>

        <p
          className="text-[15px] sm:text-[17px] leading-[1.75] font-light mb-10 max-w-[620px]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          We established CodersBloom because we couldn't find the kind of
          training we would confidently hire from. So we created it ourselves —{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
            for working professionals, by working professionals.
          </strong>
        </p>

        {/* Stats row — wraps on mobile */}
        <div
          className="flex flex-wrap gap-y-5 pt-8 sm:pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="pr-5 sm:pr-10 mr-5 sm:mr-10 pb-2 last:border-r-0 last:pr-0 last:mr-0"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <div
                className="font-bold text-white leading-none mb-1.5"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  fontSize: "clamp(20px,2.5vw,36px)",
                  letterSpacing: "-1px",
                }}
              >
                {s.n}
              </div>
              <div
                className="text-[11px] sm:text-[12px] leading-[1.45]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════════════════════════════════════ */
const Testimonials = () => {
  const [hov, setHov] = useState(null);
  const cards = [
    {
      initials: "RS",
      name: "Rahul Sharma",
      role: "Senior Software Engineer",
      company: "Infosys",
      quote:
        "CodersBloom gave me the kind of practical exposure no traditional training institute could. The projects were real, the mentorship was personal, and the interview preparation was extremely sharp. It completely changed the way I approached my career.",
    },
    {
      initials: "SV",
      name: "Sneha Verma",
      role: "Data Analyst",
      company: "EY",
      quote:
        "Before joining CodersBloom, I had theoretical knowledge but lacked confidence in real project environments. This programme helped me understand how companies actually work, what they expect, and how to position myself for growth.",
    },
    {
      initials: "AM",
      name: "Arjun Mehta",
      role: "Product Analyst",
      company: "TCS",
      quote:
        "The training was practical, direct, and highly career-focused. Because of CodersBloom, I successfully transitioned into a Product Analyst role and felt genuinely prepared from day one.",
    },
  ];
  return (
    <section
      id="voices"
      className={`${secPy} border-b`}
      style={{ background: C.white, borderColor: C.border }}
    >
      <Wrap>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <Eyebrow label="Graduate Voices" />
            <Display>
              What Our
              <br />
              <Em>People Say.</Em>
            </Display>
          </div>
          <Lead className="md:max-w-[280px]">
            From the professionals who came in with knowledge and left with
            careers.
          </Lead>
        </div>

        {/* 1→3 col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative overflow-hidden flex flex-col gap-5 p-7 sm:p-8 rounded border transition-colors duration-200"
              style={{ background: C.cream, borderColor: C.border }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                style={{
                  background: C.gold,
                  transform: hov === i ? "scaleX(1)" : "scaleX(0)",
                }}
              />
              <Stars />
              <div
                className="font-serif italic text-[15px] sm:text-[16px] leading-[1.75] flex-1"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: C.ink,
                }}
              >
                <span
                  className="text-[40px] sm:text-[48px] leading-none align-[-16px] sm:align-[-18px] mr-1"
                  style={{ color: C.gold }}
                >
                  "
                </span>
                {c.quote}
              </div>
              <div
                className="flex items-center gap-3.5 pt-5"
                style={{ borderTop: `1px solid ${C.border}` }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[14px]"
                  style={{
                    background: C.navy,
                    color: C.gold,
                    fontFamily: "'Playfair Display',Georgia,serif",
                  }}
                >
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <strong
                    className="block text-[14px] font-bold leading-[1.3] truncate"
                    style={{ color: C.navy }}
                  >
                    {c.name}
                  </strong>
                  <span
                    className="text-[12px] block truncate"
                    style={{ color: C.stone }}
                  >
                    {c.role}
                  </span>
                </div>
                <span
                  className="text-[10px] sm:text-[11px] font-semibold uppercase px-2.5 py-1 rounded-sm whitespace-nowrap flex-shrink-0"
                  style={{ color: C.stone, background: C.mist }}
                >
                  {c.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════════════════════════════════════ */
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    {
      q: "What is CodersBloom?",
      a: "CodersBloom is a professional training organisation that was built in 2009 as an internal upskilling initiative for our own consulting teams. We opened it to external candidates after professionals around us saw the quality difference. Every programme is led by active industry practitioners — not full-time trainers — working on real project problems, with a maximum of ten participants per batch.",
    },
    {
      q: "Who teaches at CodersBloom?",
      a: "Every trainer is an active practitioner from our consulting ecosystem — Project Managers running live delivery programmes, Data Scientists working on production models, Business Analysts embedded in enterprise client projects, and Cybersecurity professionals in active engagements. They are not full-time educators. They teach from what they are doing this week, not from what they studied years ago.",
    },
    {
      q: "What courses does CodersBloom offer?",
      a: "We currently offer four career-track programmes: Business Analysis (BA), Cybersecurity, Project Management (PMP), and Data Science, AI & Machine Learning. Each is a complete end-to-end programme — not a collection of modules — designed to take you from your current background to employment in a specific professional role.",
    },
    {
      q: "How is CodersBloom different from other training institutes in India?",
      a: "Three structural differences — not marketing claims. First, our trainers are working practitioners, not professional educators. Second, the project work is from real consulting and client engagements, not manufactured classroom exercises. Third, batch size is capped at ten — giving every participant the kind of individual mentorship that is simply impossible at scale. Most institutes measure success by enrolment numbers. We measure it by employment outcomes.",
    },
    {
      q: "What is the batch size at CodersBloom?",
      a: "Maximum ten participants per batch. This is a non-negotiable structural commitment — not a marketing line. Smaller batches allow trainers to track every participant's progress in detail, intervene early when someone is struggling, and provide the kind of personalised mentorship that shapes careers rather than just completing courses.",
    },
    {
      q: "What placement support does CodersBloom provide?",
      a: "We provide active, sustained placement support — not a certificate and a good luck. This includes resume building and positioning, LinkedIn and profile optimisation, direct recruiter introductions, company-specific interview preparation before every interview, and structured debrief after every interview. Our support continues post-placement for the first few months on the job, because the transition period matters.",
    },
    {
      q: "Do you guarantee placement after the programme?",
      a: "We guarantee interviews — the offer is yours to earn. We will not stop supporting you until you have broken through. Most institutes stop at mock interviews. We work with you through real interviews — preparing specifically for each company and role, debriefing after each attempt, and refining your approach until it lands.",
    },
    {
      q: "In which cities is CodersBloom available?",
      a: "Our headquarters is in Hitech City, Hyderabad. We currently deliver training across 17 cities in India — Hyderabad, Bangalore, Pune, Mumbai, Chennai, Noida, Gurgaon, Ahmedabad, Kochi, Vizag, Coimbatore, Chandigarh, Jaipur, Kolkata, Indore, Trivandrum, and New Delhi. All programmes are also available fully online with live instructor-led sessions, so location is not a barrier.",
    },
    {
      q: "Can working professionals join CodersBloom?",
      a: "Yes — every programme is designed for working professionals. Sessions are scheduled on weekday evenings and weekends. All live sessions are recorded and available on LMS within 24 hours. You can progress through the programme without interrupting your current employment, and we actively support professionals transitioning from adjacent roles rather than starting from scratch.",
    },
    {
      q: "What is the fee for CodersBloom programmes?",
      a: "Fees vary by programme. Zero-cost EMI is available across all major credit cards for every programme. Merit-based scholarships are available for eligible candidates. There are no hidden fees — your full investment is disclosed upfront, and our advisors will walk through all options on a free counselling call before you make any commitment.",
    },
    {
      q: "How long has CodersBloom been running?",
      a: "Seventeen years. CodersBloom was established in 2009 as an internal training initiative for our consulting teams in Hyderabad. We have been training and placing professionals continuously since then — across more than 2,000 career transitions and 50+ hiring companies. The methodology has remained consistent because it continues to produce the outcomes that matter.",
    },
    {
      q: "Is CodersBloom only for software training?",
      a: "No. While our origins are in software delivery, we now train across four distinct career tracks: Business Analysis, Cybersecurity, Project Management, and Data Science / AI / ML. Each programme is built for professionals in or transitioning into technology roles — not exclusively for developers. Our BA, PM, and GRC tracks regularly attract candidates from non-engineering backgrounds.",
    },
  ];
  return (
    <section
      id="faq"
      className={`${secPy} border-b`}
      style={{ background: C.cream, borderColor: C.border }}
    >
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-[80px] items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-[88px]">
            <Eyebrow label="Frequently Asked" />
            <Display className="mt-1">
              Every Question
              <br />
              <Em>Answered.</Em>
            </Display>
            <Lead className="mt-4">
              Everything you need to know before making a decision — asked and
              answered directly.
            </Lead>

            {/* CTA box */}
            <div
              className="relative overflow-hidden rounded mt-8 p-6 sm:p-7"
              style={{ background: C.navy }}
            >
              <GridBg opacity={0.06} size={30} />
              <div className="relative z-10">
                <p
                  className="text-[13px] sm:text-[14px] leading-[1.65] font-light mb-5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Still have a question not covered here? Our advisors are
                  working professionals themselves — a free call is always the
                  fastest way to get an honest answer.
                </p>
                <a
                  href="#enrol"
                  className="inline-block text-[13px] font-bold px-5 py-2.5 rounded-sm no-underline transition-colors duration-150"
                  style={{ background: C.gold, color: C.navy }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#d4b060")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = C.gold)
                  }
                >
                  Book a free call →
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="cursor-pointer border-b"
                style={{
                  borderTop: i === 0 ? `1px solid ${C.border}` : "none",
                  borderColor: C.border,
                }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                <div
                  className="flex items-start justify-between gap-4 py-4 sm:py-5 text-[13px] sm:text-[15px] font-semibold leading-[1.4]"
                  style={{ color: C.navy }}
                >
                  {f.q}
                  <span
                    className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 border rounded-full flex items-center justify-center text-[16px] sm:text-[18px] font-light leading-none transition-all duration-150 mt-[1px]"
                    style={{
                      borderColor: openIdx === i ? C.navy : C.border,
                      background: openIdx === i ? C.navy : "transparent",
                      color: openIdx === i ? "#fff" : C.stone,
                    }}
                  >
                    {openIdx === i ? "−" : "+"}
                  </span>
                </div>
                {openIdx === i && (
                  <div
                    className="pb-5 text-[13px] sm:text-[14px] leading-[1.8] font-light max-w-[600px]"
                    style={{ color: C.stone }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   BOTTOM CTA
══════════════════════════════════════════════════════════════════════════════ */
const BottomCTA = () => {
  const pills = [
    "Max 10 per batch",
    "Active industry trainers",
    "Real project deliverables",
    "Placement until placed",
    "17 years of outcomes",
  ];
  return (
    <section
      id="enrol"
      className="relative overflow-hidden"
      style={{ background: C.navy ,
        backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${bottomctaBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
      }}
    >
      <GridBg opacity={0.05} />
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: C.gold }}
      />
      <Wrap>
        <div className="relative z-10 py-16 sm:py-[88px] text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 justify-center">
            <div
              className="w-7 h-px flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.5)" }}
            />
            <span
              className="text-[11px] font-semibold tracking-[2.5px] uppercase"
              style={{ color: C.gold }}
            >
              Ready to Build Your Career in Tech?
            </span>
          </div>

          <h2
            className="font-bold text-white leading-[1.1] tracking-[-1px] mb-5"
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(28px,4vw,52px)",
            }}
          >
            Small Batches.
            <br />
            Industry Practitioners.
            <br />
            <em style={{ color: C.gold }}>Real Project Work from Day One.</em>
          </h2>

          <p
            className="text-[15px] sm:text-[16px] leading-[1.7] font-light mb-12 mx-auto max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            One conversation with a working professional from our team is all it
            takes to know whether CodersBloom is the right move for you. No
            obligation. No pressure. Just honesty.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
            {pills.map((p) => (
              <span
                key={p}
                className="flex items-center gap-2.5 text-[12px] sm:text-[13px]"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <GoldCheckPill />
                {p}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="#"
              className="inline-block text-[14px] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm no-underline transition-colors duration-150"
              style={{
                background: C.gold,
                color: C.navy,
                letterSpacing: "0.2px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#d4b060")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
            >
              Book a Free Counselling Call
            </a>
            <a
              href="#"
              className="inline-block text-[14px] font-medium px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm no-underline border transition-colors duration-150"
              style={{
                color: "rgba(255,255,255,0.7)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Explore All Programmes
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════════════════ */
const Footer = () => {
  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + scrollY - 68,
        behavior: "smooth",
      });
  };
  const cols = [
    {
      title: "Programmes",
      links: [
        { label: "Business Analysis", href: "#" },
        { label: "Cybersecurity", href: "#" },
        { label: "Project Management", href: "#" },
        { label: "Data Science & AI", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Our Story", id: "origin" },
        { label: "Our Model", id: "model" },
        { label: "Locations", id: "locations" },
        { label: "Graduate Voices", id: "voices" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "1800-000-0000 (Free)", href: "tel:+911800000000" },
        { label: "hello@codersbloom.in", href: "mailto:hello@codersbloom.in" },
        { label: "WhatsApp Us", href: "#" },
        { label: "Student Portal", href: "#" },
      ],
    },
  ];
  return (
    <footer
      style={{
        background: C.ink,
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Wrap>
        <div
          className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 py-10 sm:py-14 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <LogoMark size={28} />
              <strong
                className="font-bold text-[15px] text-white"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}
              >
                CodersBloom
              </strong>
            </a>
            <p
              className="text-[13px] leading-[1.7] font-light max-w-[260px]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Industry-led professional training since 2009. Training is the
              beginning. Placement is the promise.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4
                className="text-[10px] font-bold tracking-[2px] uppercase mb-4"
                style={{ color: C.gold }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.id ? (
                      <button
                        onClick={() => scroll(l.id)}
                        className="text-[12px] sm:text-[13px] font-light bg-transparent border-none cursor-pointer p-0 text-left transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.target.style.color = "#fff")}
                        onMouseLeave={(e) =>
                          (e.target.style.color = "rgba(255,255,255,0.4)")
                        }
                      >
                        {l.label}
                      </button>
                    ) : (
                      <a
                        href={l.href}
                        className="text-[12px] sm:text-[13px] font-light no-underline transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.target.style.color = "#fff")}
                        onMouseLeave={(e) =>
                          (e.target.style.color = "rgba(255,255,255,0.4)")
                        }
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-5 text-[11px] sm:text-[12px]"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          <p>© 2025 CodersBloom. All rights reserved. Est. 2009, Hyderabad.</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  className="no-underline transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.25)")
                  }
                >
                  {t}
                </a>
              ),
            )}
          </div>
        </div>
      </Wrap>
    </footer>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   STICKY MOBILE BAR
══════════════════════════════════════════════════════════════════════════════ */
const StickyMob = () => (
  <div
    className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-5 py-3 lg:hidden"
    style={{ background: C.navy, borderTop: `2px solid ${C.gold}` }}
  >
    <p
      className="text-[12px] font-medium mr-3"
      style={{ color: "rgba(255,255,255,0.75)" }}
    >
      Small batches. Real work. Real results.
    </p>
    <a
      href="#enrol"
      className="text-[12px] sm:text-[13px] font-bold px-4 py-2 rounded-sm no-underline whitespace-nowrap flex-shrink-0"
      style={{ background: C.gold, color: C.navy }}
    >
      Enroll Now →
    </a>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          background: #FAF8F3;
          color: #1C1C1C;
          overflow-x: hidden;
        }
        body::before {
          content: ''; position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
        /* Hero fade-up animation */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .hero-inner > * { animation: fadeUp 0.65s ease both; }
        .hero-inner > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-inner > *:nth-child(2) { animation-delay: 0.2s; }
        .hero-inner > *:nth-child(3) { animation-delay: 0.3s; }
        .hero-inner > *:nth-child(4) { animation-delay: 0.45s; }
        /* Reality table — sm border between columns */
        @media (min-width: 640px) {
          .reality-before { border-right: 1px solid #E2DDD4 !important; border-bottom: none !important; padding-bottom: 0 !important; }
          .reality-after { padding-top: 0 !important; }
        }
        @media (max-width: 1023px) { body { padding-bottom: 60px; } }
      `}</style>
      <div className="relative">
        <AnnounceBanner />
        <Nav />
        <Hero />
        
        <Testimonials />
        <FAQ />
        <BottomCTA />
        <Footer />
        <StickyMob />
      </div>
    </>
  );
}
