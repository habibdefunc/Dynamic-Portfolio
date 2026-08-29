// import { Link } from "react-router-dom";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import profilePhoto from '../assets/pp4.jpg';
// import CV from "../assets/Habib-Ritonga.pdf";

const Contact = () => {
  return (
    <div id="contact" className="reveal-section w-full text-[#FBFBFB]" style={{ animationDelay: '0.24s' }}>
      <div className="flex flex-col ">
        <h1 className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
          Get in Touch
        </h1>
      </div>
      <div className="m-auto w-full font-ibm px-2 sm:px-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[1.1fr_1.9fr] lg:gap-8">
          {/* left */}
          <div className="w-full h-full shadow-xl bg-[#323443] rounded-xl p-3 sm:p-4">
            <div className="h-full">
              <div className="mb-3">
                <img
                  className="w-full rounded-xl object-cover aspect-[4/3] sm:aspect-square hover:scale-[1.02] ease-in duration-300"
                  src={profilePhoto}
                  alt="/"
                />
              </div>
              <div className="font-poppins">
                <h2 className="py-2 text-white font-bold text-xl sm:text-2xl">
                  HabibFnc
                </h2>
                <p className="text-sm sm:text-base">Web Developer</p>
                <p className="py-3 text-xs sm:text-sm leading-relaxed">
                  I am available for freelance or full-time positions. Contact
                  me and lets talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-6 sm:pt-8 font-poppins text-xs sm:text-sm">Connect With Me</p>
                <div className="flex items-center justify-center gap-3 sm:gap-4 py-3 sm:py-4">
                  <a href="https://www.instagram.com/mhdnaufalhartg/">
                    <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-2 sm:p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition-all">
                      <FaInstagram className="text-navbar text-lg sm:text-xl md:text-2xl" />
                    </div>
                  </a>
                  <a href="https://github.com/habibdefunc">
                    <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-2 sm:p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition-all">
                      <FaGithub className="text-navbar text-lg sm:text-xl md:text-2xl" />
                    </div>
                  </a>
                  <a href="">
                    <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-2 sm:p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300 transition-all">
                      <FaLinkedin className="text-navbar text-lg sm:text-xl md:text-2xl" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto shadow-xl bg-[#323443] rounded-xl p-3 sm:p-4 lg:p-6">
            <form
              action="https://getform.io/f/ajjeopwa"
              method="POST"
              encType="multipart/form-data"
              target="_blank"
              className="text-black space-y-3 sm:space-y-4"
            >
              {/* Metadata untuk email */}
              <input
                type="hidden"
                name="form-name"
                value="portfolio-contact-form"
              />
              <input
                type="hidden"
                name="_subject"
                value="New Message From Portfolio Website!"
              />
              <input
                type="hidden"
                name="_redirect"
                value="https://your-domain.com/thank-you"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <label className="uppercase text-xs sm:text-sm py-2 font-semibold">Name</label>
                  <input
                    className="border-2 rounded-lg p-2 sm:p-3 text-sm border-slate-300 outline-none focus:border-[#3BF686] transition-colors"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-xs sm:text-sm py-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    className="border-2 rounded-lg p-2 sm:p-3 text-sm border-slate-300 outline-none focus:border-[#3BF686] transition-colors"
                    type="tel"
                    name="phone"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="uppercase text-xs sm:text-sm py-2 font-semibold">Email</label>
                <input
                  className="border-2 rounded-lg p-2 sm:p-3 text-sm border-slate-300 outline-none focus:border-[#3BF686] transition-colors"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="uppercase text-xs sm:text-sm py-2 font-semibold">Subject</label>
                <input
                  className="border-2 rounded-lg p-2 sm:p-3 text-sm border-slate-300 outline-none focus:border-[#3BF686] transition-colors"
                  type="text"
                  name="subject"
                />
              </div>

              <div className="flex flex-col">
                <label className="uppercase text-xs sm:text-sm py-2 font-semibold">Message</label>
                <textarea
                  className="border-2 rounded-lg p-2 sm:p-3 text-sm outline-none border-slate-300 focus:border-[#3BF686] transition-colors resize-none"
                  rows="5"
                  name="message"
                  required
                ></textarea>
              </div>

              <button className="w-full p-3 sm:p-4 bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-navbar font-bold rounded-lg hover:scale-[1.02] transition-transform text-sm sm:text-base">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="/#porto">
            <div>
              <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-navbar" size={30} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
