import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, MapPin, Code2, GraduationCap, ChartNoAxesColumnIncreasing } from "lucide-react";

export default function Mainsite() {
  return (<>
    <main className="flex flex-col justify-center font-outfit relative overflow-hidden">
      <section id="hero" className={`
        relative flex flex-col justify-center items-start min-h-screen px-10 overflow-hidden
      `}>
        <img src="/img/bg.png" className="absolute z-0 w-[85%] right-0 top-0 h-full object-cover object-[70%_center]" />

        <div className="
          absolute inset-0 z-10
          bg-[linear-gradient(to_right,#151515_0%,#151515_12%,rgba(21,21,21,0.85)_25%,rgba(21,21,21,0.35)_38%,transparent_70%)]
        "/>

        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,rgba(42,36,24,0.45)_0%,rgba(21,21,21,0.65)_45%,rgba(21,21,21,0.9)_100%)]"/>

        <Reveal>
          <div className="relative z-20 flex flex-col items-start ml-10 justify-center max-w-xl">
            <h2 className="text-2xl flex mb-2">Hello!, I'm</h2>
            <h1 className="text-6xl gold-gradient font-bold">A. Diyar 'drizzy' Yüce</h1>
            <p className="text-2xl mt-4 font-semibold flex max-w-2xl">Developer and data engineering student focused on modern web experiences and software development.</p>
          
            <div className="flex mt-10 gap-10">
              <button commandFor="contact-dialog" command="show-modal" className="
                flex cursor-pointer justify-center items-center rounded-xl w-55 h-10.5 px-6 py-7 gap-3 group
                bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
              ">
                <span className="
                  text-[#151515] text-xl mr-auto font-semibold max-w-2xl
                ">
                  Let's connect
                </span>
                
                <ArrowRightIcon size={22} className="text-[#151515] group-hover:translate-x-2 transition duration-200" />
              </button>

              <a href="#about" className="flex group items-center"
                onClick={(e) => {
                  e.preventDefault();

                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}>
                <span className="
                  text-lg group-hover:scale-101 group-hover:-translate-y-1 transition duration-200
                  group-hover:text-[#E8BD70]
                ">
                  More about me
                </span>
              </a>
            </div>

          </div>
        </Reveal>

      <div className="
        absolute inset-0 z-10
        bg-[radial-gradient(ellipse_110%_45%_at_50%_110%,rgba(29,30,30,1),transparent_70%)]
      "/>
      </section>

      <section id="services" className="flex relative min-h-screen px-20 py-15 bg-[#1d1e1e]">
        <Reveal>
          <h1 className="text-lg gold-gradient mb-10 tracking-[20%]">SERVICES</h1>

          <div className="flex">
            <img src="/img/frontend.png" className="rounded-xl w-180 h-auto" />

            <div className="ml-10">
              <h1 className="text-4xl font-bold">Frontend</h1>
              <p className="text-xl mt-5 text-[#9f9fa8]">
                Frontend is the eye-candy of every digital product, 
                where the layer that captures attention and shapes the user's first impression. 
                I develop modern, responsive, and high-performing interfaces that combine clean design with seamless usability. 
                The goal is simple: create experiences that look impressive, feel intuitive, and leave a lasting impact.
              </p>

              <h2 className="text-2xl font-bold mt-12">Tech that power my work</h2>

              <div className="mt-4 flex flex-wrap gap-3 max-w-3xl">
                <Tech image="/img/react.png" name="React" role="specialize" />
                <Tech image="/img/javascript.png" name="JavaScript" role="specialize" />
                <Tech image="/img/tailwind.png" name="Tailwindcss" role="specialize" />
                <Tech image="/img/typescript.png" name="TypeScript" role="" />
                <Tech image="/img/html.png" name="HTML" role="" />
                <Tech image="/img/css.png" name="CSS" role="" />
              </div>

              <p className="text-[#858281] mt-8">Gold colour = Specializing in it...</p>
            </div>
          </div>
        
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E8BD70]/50 to-transparent my-18" />

          <div className="flex mt-10">
            <div className="">
              <h1 className="text-4xl font-bold">Backend + Database</h1>
              <p className="text-xl mt-5 text-[#9f9fa8] max-w-2xl">
                Backend is the foundation that powers a digital product behind the scenes. 
                I build reliable server-side systems and database solutions that handle data, 
                business logic, authentication, and application functionality efficiently. 
                My focus is on creating secure, scalable, 
                and maintainable architectures that keep applications running smoothly 
                and provide a solid foundation for the user experience.
              </p>

              <h2 className="text-2xl font-bold mt-12">Tech that power my work</h2>

              <div className="mt-4 flex flex-wrap gap-3 max-w-2xl">
                <Tech image="/img/java.png" name="Java" role="specialize" />
                <Tech image="/img/nodejs.png" name="Node.js" role="specialize" />
                <Tech image="/img/postgresql.png" name="Postgresql" role="specialize" />
                <Tech image="/img/spring.png" name="Spring Boot" role="" />
                <Tech image="/img/mysql.png" name="Mysql" role="" />
              </div>

              <p className="text-[#858281] mt-8">Gold colour = Specializing in it...</p>
            </div>

            <img src="/img/backend.png" className="rounded-xl w-180 h-auto ml-auto" />

          </div>
        </Reveal>
      </section>

      <section id="about" className="flex relative min-h-screen px-20 py-15">
        <Reveal>
          <h1 className="text-lg gold-gradient mb-10 tracking-[20%]">ABOUT ME</h1>
          <div className="flex gap-20 justify-center">
            <div className="mt-20">
              <h1 className="text-3xl mb-5">Who am i?</h1>

              <p className="text-xl text-[#9f9fa8] max-w-4xl">
                I started coding because I was curious about how the websites and applications 
                I used every day were actually built. At first, it was mostly experimentation, 
                changing small things, breaking them, fixing them, and slowly understanding 
                how everything connected. That curiosity grew into a real interest in software 
                development, especially the process of turning an idea into something people can actually use.
              </p><br />
              <p className="text-xl text-[#9f9fa8] max-w-4xl">
                As I learned more, I became interested in both the visual and technical sides 
                of development. I enjoyed frontend because it let me combine design with code, 
                but I also wanted to understand what was happening behind the interface, which 
                pushed me toward backend development, databases, and data engineering. Since then, 
                I've focused on becoming a well-rounded developer who can understand the full 
                picture and build applications that are clean, reliable, and thoughtfully designed.
              </p>

              <ul className="flex mt-12 gap-5">
                <div className="flex gap-3">
                  <MapPin className="text-[#E8BD70] mt-1"/>

                  <div>
                    <h2 className="text-sm tracking-[15%] text-[#E8BD70]">BASED IN</h2>
                    <li>Norway</li>
                  </div>
                </div>

                
                <div className="flex gap-3">
                  <Code2 className="text-[#E8BD70] mt-1" />

                  <div>
                    <h2 className="text-sm tracking-[15%] text-[#E8BD70]">FOCUS</h2>
                    <li>Full-stack development</li>
                    <li>Data engineering</li>
                  </div>
                </div>

                <div className="flex gap-3">
                  <GraduationCap className="text-[#E8BD70] mt-1" />

                  <div>
                    <h2 className="text-sm tracking-[15%] text-[#E8BD70]">CURRENTLY</h2>
                    <li>Studying Data Engineering</li>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ChartNoAxesColumnIncreasing className="text-[#E8BD70] mt-1" />

                  <div>
                    <h2 className="text-sm tracking-[15%] text-[#E8BD70]">INTEREST</h2>
                    <li>Data and coding</li>
                    <li>Gym and weightlifting</li>
                    <li>Football</li>
                    <li>Chilling</li>
                  </div>
                </div>
              </ul>

              <button className="
                flex cursor-pointer justify-center items-center rounded-xl w-55 h-10.5 px-6 py-7 mt-5 group
                bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
              ">
                <span className="
                  text-[#151515] text-xl mr-auto font-semibold max-w-2xl
                ">
                  Get in touch
                </span>
                
                <ArrowRightIcon size={22} className="text-[#151515] group-hover:translate-x-2 transition duration-200" />
              </button>
            </div>
            
            <div className="relative flex justify-center items-center">
              <div className="absolute size-[95%] blur-3xl z-0 rounded-full bg-[#E8BD70]/20" />

              <img src="/img/fjes - keeg.png" className="
                w-120 h-120 object-cover flex justify-center items-center object-[50%_35%]
                border-2 border-[#E8BD70]/50 bg-[#202020] shrink-0 mt-10 rounded-full z-10
              "/>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  </>)
}

type Props = {
  image: string
  name: string
  role: string
}

function Tech({ image, name, role }: Props ) {
   const roleColour = getRoleColour(role);

  return(<>
    <div className={`border rounded-lg flex px-3 py-2 gap-3 ${roleColour} shrink-0 justify-center items-center`}>
      <img src={image} className="w-5 h-auto" />

      <span className="">
        {name}
      </span>
    </div>  
  </>)
}

function Reveal({ children }: { children: React.ReactNode; }) {
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
        className={`transition-all z-20 duration-600 ease-[ease] w-full ${
          active
            ? "translate-y-0 opacity-100"
            : "translate-y-[50px] opacity-0"
        }`}
      >
        {children}
      </div>
    );
}

const roleColour = {
  normal: "border-[#403f3e] bg-[#202020]",
  special: "border-[#E8BD70] bg-[#E8BD70]/10"
}

function getRoleColour(role: string) {
  if (role === "specialize") return roleColour.special;
  return roleColour.normal;
}