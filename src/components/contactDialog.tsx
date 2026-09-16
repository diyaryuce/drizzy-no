import { ArrowRightIcon } from "lucide-react";

export default function ContactDialog() {
  return (
    <dialog id="contact-dialog" className="
      rounded-xl bg-[#202020]/95 border-2 border-[#202020] p-8 font-outfit 
      mx-auto my-auto items-start w-120 relative
    ">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl gold-gradient font-bold">Get in touch</h1>
        <p className="mt-2 text-base max-w-lg">Do you have a project in mind? Get in touch, and we'll find the solution together.</p>

        <button command="close" commandFor="contact-dialog" className="absolute right-5.5 cursor-pointer">X</button>

        <form className="flex flex-col gap-4 mt-4 w-full">

          <div className="flex flex-col gap-1">
            <span className="">Your name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-lg border border-[#404040] p-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="">Your E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-lg border border-[#404040] p-3"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Writte your message..."
              className="rounded-lg border border-[#404040] p-3"
            />
          </div>

          <div className="flex items-center gap-6 mt-2">
            <button type="submit" className="
              flex cursor-pointer justify-center items-center rounded-xl w-35 h-10.5 px-5 py-6 gap-3 group
              bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
            ">
              <span className="
                text-[#151515] text-xl mr-auto font-semibold max-w-2xl
              ">
                Submit
              </span>
              
              <ArrowRightIcon size={22} className="text-[#151515] group-hover:translate-x-2 transition duration-200" />
            </button>

            <button type="button" command="close" commandFor="contact-dialog" className="group flex w-20 cursor-pointer">
              <span className="
                text-lg group-hover:scale-[1.01] group-hover:-translate-y-1 transition duration-200
                group-hover:text-[#E8BD70] text-[#b2b2a8]
              ">
                Cancel
              </span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}