import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "lucide-react";

export default function Mainsite() {
  return (<>
    <main className="flex flex-col justify-center font-outfit">
      <section role="hero" className={`
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
          
            <div className="flex mt-10 gap-4">
              <button className="
                flex cursor-pointer justify-center items-center rounded-xl w-50 h-10.5 px-3 gap-3 group
                bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
              ">
                <span className="
                  text-[#151515] text-xl font-semibold max-w-2xl
                ">
                  Let's connect
                </span>
                
                <ArrowRightIcon size={22} className="text-[#151515] group-hover:translate-x-2 transition duration-200" />
              </button>

              <button className="flex cursor-pointer group items-center">
                <span className="
                  text-lg group-hover:scale-101 group-hover:-translate-y-1 transition duration-200
                  group-hover:text-[#E8BD70]
                ">
                  More about me
                </span>
              </button>
            </div>

          </div>
        </Reveal>

      <div className="
        absolute inset-0 z-10
        bg-[radial-gradient(ellipse_110%_45%_at_50%_110%,rgba(29,30,30,1),transparent_70%)]
      "/>
      </section>

      <section role="services" className="flex relative min-h-screen px-25 pt-15 bg-[#1d1e1e]">
        <Reveal>
          <h1 className="text-6xl gold-gradient font-bold">Services</h1>

          <img src="/img/website.png" alt="" />
        </Reveal>
      </section>
    </main>
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
        className={`transition-all z-20 duration-600 ease-[ease] ${
          active
            ? "translate-y-0 opacity-100"
            : "translate-y-[50px] opacity-0"
        }`}
      >
        {children}
      </div>
    );
}