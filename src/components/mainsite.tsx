import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  MapPin,
  Code2,
  GraduationCap,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

export default function Mainsite() {
  return (
    <>
      <main className="relative flex flex-col justify-center overflow-hidden font-outfit">
        <section
          id="hero"
          className="
            relative flex min-h-screen flex-col
            items-start justify-center
            overflow-hidden
            px-5 sm:px-8 lg:px-10
          "
        >
          <img
            src="/img/bg.png"
            className="
              absolute right-0 top-0 z-0
              h-full
              w-full lg:w-[85%]
              object-cover
              object-[65%_center] lg:object-[70%_center]
            "
          />

          <div
            className="
              absolute inset-0 z-10
              bg-[linear-gradient(to_right,#151515_0%,#151515_12%,rgba(21,21,21,0.85)_25%,rgba(21,21,21,0.35)_38%,transparent_70%)]
            "
          />

          <div
            className="
              absolute inset-0 z-10
              bg-[radial-gradient(ellipse_at_top,rgba(42,36,24,0.45)_0%,rgba(21,21,21,0.65)_45%,rgba(21,21,21,0.9)_100%)]
            "
          />

          <Reveal>
            <div
              className="
                relative z-20
                ml-0 lg:ml-10
                flex max-w-xl flex-col
                items-start justify-center
              "
            >
              <h2 className="mb-2 text-lg sm:text-xl lg:text-2xl">
                Welcome to
              </h2>

              <div className="flex items-center gap-5">
                <img
                  src="/img/anadolu_gold.png"
                  className="size-12 lg:size-16"
                />

                <h1
                  className="
                    gold-gradient
                    text-[clamp(2.5rem,10vw,3.75rem)]
                    font-bold
                    leading-tight
                    lg:text-6xl
                  "
                >
                  yucecode.no
                </h1>
              </div>

              <p
                className="
                  mt-4 max-w-sm lg:max-w-2xl
                  text-lg sm:text-xl lg:text-2xl
                  font-semibold
                "
              >
                I develop modern digital experiences that combine clean design,
                solid engineering, and intuitive user interaction.
              </p>

              <div
                className="
                  mt-5 flex
                  flex-col sm:flex-row
                  gap-4 sm:gap-6 lg:gap-10
                  sm:mt-8 lg:mt-10
                "
              >
                <button
                  commandFor="contact-dialog"
                  command="show-modal"
                  className="
                    group flex
                    h-14 w-55
                    cursor-pointer
                    items-center justify-center
                    gap-3 rounded-xl
                    px-6
                    bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
                  "
                >
                  <span
                    className="
                      mr-auto
                      text-xl font-semibold
                      text-[#151515]
                    "
                  >
                    Let's connect
                  </span>

                  <ArrowRightIcon
                    size={22}
                    className="
                      text-[#151515]
                      transition duration-200
                      group-hover:translate-x-2
                    "
                  />
                </button>

                <a
                  href="#about"
                  className="group flex items-center gap-3"
                  onClick={(e) => {
                    e.preventDefault();

                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span
                    className="
                      text-lg
                      transition duration-200
                      group-hover:-translate-y-1
                      group-hover:scale-[1.01]
                      group-hover:text-[#E8BD70]
                    "
                  >
                    More about me
                  </span>

                  <ArrowRightIcon
                    size={18}
                    className="
                      sm:hidden block 
                    "
                  />
                </a>
              </div>

              <div className="flex flex-col mt-8">
                <h2>Brought to you by:</h2>
                <h3>Ayaz Diyar 'drizzy' Yüce</h3>
              </div>
            </div>
          </Reveal>

          <div
            className="
              absolute inset-0 z-10
              bg-[radial-gradient(ellipse_110%_45%_at_50%_110%,rgba(29,30,30,1),transparent_70%)]
            "
          />
        </section>

        <section
          id="services"
          className="
            relative flex min-h-screen
            bg-[#1d1e1e]
            px-5 py-10
            sm:px-8
            lg:px-20 lg:py-15
          "
        >
          <Reveal>
            <h1 className="gold-gradient mb-10 text-sm lg:text-lg tracking-[0.2em]">
              SERVICES
            </h1>

            {/* FRONTEND */}
            <div
              className="
                flex min-w-0
                flex-col
                lg:flex-row
              "
            >
              <img
                src="/img/frontend.png"
                className="
                  h-auto w-full
                  rounded-xl
                  lg:w-180
                  shrink-0
                "
              />

              <div
                className="
                  min-w-0
                  mt-8 lg:mt-0
                  ml-0 lg:ml-10
                "
              >
                <h1 className="text-3xl font-bold sm:text-4xl">Frontend</h1>

                <p
                  className="
                    mt-5
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  Frontend is the eye-candy of every digital product, where the
                  layer that captures attention and shapes the user's first
                  impression. I develop modern, responsive, and high-performing
                  interfaces that combine clean design with seamless usability.
                  The goal is simple: create experiences that look impressive,
                  feel intuitive, and leave a lasting impact.
                </p>

                <h2 className="mt-10 text-xl font-bold sm:text-2xl lg:mt-12">
                  Tech that power my work
                </h2>

                <div className="mt-4 flex max-w-3xl flex-wrap gap-3">
                  <Tech image="/img/react.png" name="React" role="specialize" />

                  <Tech
                    image="/img/javascript.png"
                    name="JavaScript"
                    role="specialize"
                  />

                  <Tech
                    image="/img/tailwind.png"
                    name="Tailwindcss"
                    role="specialize"
                  />

                  <Tech image="/img/typescript.png" name="TypeScript" role="" />

                  <Tech image="/img/html.png" name="HTML" role="" />

                  <Tech image="/img/css.png" name="CSS" role="" />
                </div>

                <p className="mt-8 text-sm text-[#858281] sm:text-base">
                  Gold colour = Specializing in it...
                </p>
              </div>
            </div>

            <div
              className="
                my-12 lg:my-18
                h-px w-full
                bg-gradient-to-r
                from-transparent
                via-[#E8BD70]/50
                to-transparent
              "
            />

            <div
              className="
                mt-10 flex min-w-0
                flex-col
                gap-8
                lg:flex-row lg:gap-10
              "
            >
              <img
                src="/img/backend.png"
                className="h-auto w-full rounded-xl lg:w-180 shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-3xl font-bold sm:text-4xl">
                  Backend + Database
                </h1>

                <p
                  className="
                    mt-5 max-w-2xl
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  Backend is the foundation that powers a digital product behind
                  the scenes. I build reliable server-side systems and database
                  solutions that handle data, business logic, authentication,
                  and application functionality efficiently. My focus is on
                  creating secure, scalable, and maintainable architectures that
                  keep applications running smoothly and provide a solid
                  foundation for the user experience.
                </p>

                <h2 className="mt-10 text-xl font-bold sm:text-2xl lg:mt-12">
                  Tech that power my work
                </h2>

                <div className="mt-4 flex max-w-2xl flex-wrap gap-3">
                  <Tech image="/img/java.png" name="Java" role="specialize" />

                  <Tech
                    image="/img/nodejs.png"
                    name="Node.js"
                    role="specialize"
                  />

                  <Tech
                    image="/img/postgresql.png"
                    name="Postgresql"
                    role="specialize"
                  />

                  <Tech image="/img/spring.png" name="Spring Boot" role="" />

                  <Tech image="/img/mysql.png" name="Mysql" role="" />
                </div>

                <p className="mt-8 text-sm text-[#858281] sm:text-base">
                  Gold colour = Specializing in it...
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="about"
          className="
            relative flex min-h-screen
            px-5 py-10
            sm:px-8
            lg:px-20 lg:py-15
          "
        >
          <Reveal>
            <h1 className="gold-gradient mb-10 text-sm lg:text-lg tracking-[0.2em]">
              ABOUT ME
            </h1>

            <div
              className="
                flex
                flex-col
                gap-10
                lg:flex-row lg:gap-20
                lg:justify-center
              "
            >
              <div className="mt-0 min-w-0 lg:mt-20">
                <h1 className="mb-5 text-3xl">Who am i?</h1>

                <p
                  className="
                    max-w-4xl
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  I started coding because I was curious about how the websites
                  and applications I used every day were actually built. At
                  first, it was mostly experimentation, changing small things,
                  breaking them, fixing them, and slowly understanding how
                  everything connected. That curiosity grew into a real interest
                  in software development, especially the process of turning an
                  idea into something people can actually use.
                </p>

                <br />

                <p
                  className="
                    max-w-4xl
                    text-base sm:text-lg lg:text-xl
                    leading-relaxed
                    text-[#9f9fa8]
                  "
                >
                  As I learned more, I became interested in both the visual and
                  technical sides of development. I enjoyed frontend because it
                  let me combine design with code, but I also wanted to
                  understand what was happening behind the interface, which
                  pushed me toward backend development, databases, and data
                  engineering. Since then, I've focused on becoming a
                  well-rounded developer who can understand the full picture and
                  build applications that are clean, reliable, and thoughtfully
                  designed.
                </p>

                <ul
                  className="
                    mt-10
                    grid grid-cols-2
                    gap-6
                    xl:flex xl:gap-5
                    lg:mt-12
                  "
                >
                  <div className="flex gap-3">
                    <MapPin className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        BASED IN
                      </h2>

                      <li>Norway</li>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Code2 className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        FOCUS
                      </h2>

                      <li>Full-stack development</li>
                      <li>Data engineering</li>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <GraduationCap className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        CURRENTLY
                      </h2>

                      <li>Studying Data Engineering</li>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <ChartNoAxesColumnIncreasing className="mt-1 shrink-0 text-[#E8BD70]" />

                    <div>
                      <h2 className="text-sm tracking-[0.15em] text-[#E8BD70]">
                        INTEREST
                      </h2>

                      <li>Data and coding</li>
                      <li>Gym and weightlifting</li>
                      <li>Football</li>
                      <li>Chilling</li>
                    </div>
                  </div>
                </ul>

                <button
                  commandFor="contact-dialog"
                  command="show-modal"
                  className="
                    group mt-12 lg:mt-6
                    flex h-14 w-55
                    cursor-pointer
                    items-center justify-center
                    rounded-xl mx-auto lg:mx-0
                    px-6
                    bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
                  "
                >
                  <span
                    className="
                      mr-auto
                      text-xl font-semibold
                      text-[#151515]
                    "
                  >
                    Get in touch
                  </span>

                  <ArrowRightIcon
                    size={22}
                    className="
                      text-[#151515]
                      transition duration-200
                      group-hover:translate-x-2
                    "
                  />
                </button>
              </div>

              <div
                className="
                  relative
                  flex shrink-0
                  items-center justify-center
                "
              >
                <div
                  className="
                    absolute z-0
                    size-[90%]
                    rounded-full
                    bg-[#E8BD70]/20
                    blur-3xl
                  "
                />

                <img
                  src="/img/fjes - keeg.png"
                  className="
                    relative z-10
                    aspect-square
                    sm:w-[50vw] lg:w-[25vw]
                    max-w-120
                    shrink-0
                    rounded-full
                    border-2 border-[#E8BD70]/50
                    bg-[#202020]
                    object-cover
                    object-[50%_35%]
                    lg:mt-10
                  "
                />
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}

type Props = {
  image: string;
  name: string;
  role: string;
};

function Tech({ image, name, role }: Props) {
  const roleColour = getRoleColour(role);

  return (
    <div
      className={`
        flex shrink-0
        items-center justify-center
        gap-2 sm:gap-3
        rounded-lg border
        px-2.5 py-1.5
        text-sm
        sm:px-3 sm:py-2 sm:text-base
        ${roleColour}
      `}
    >
      <img src={image} className="h-auto w-5" />

      <span>{name}</span>
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(true);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative z-20
        w-full min-w-0
        transition-[opacity,transform]
        duration-600 ease-[ease]
        ${active ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}
      `}
    >
      {children}
    </div>
  );
}

const roleColour = {
  normal: "border-[#403f3e] bg-[#202020]",
  special: "border-[#E8BD70] bg-[#E8BD70]/10",
};

function getRoleColour(role: string) {
  if (role === "specialize") {
    return roleColour.special;
  }

  return roleColour.normal;
}
