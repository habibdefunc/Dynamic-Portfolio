import { useState } from "react";

const ProjectItem = ({ title, backgroundImg, desc, tech, projectUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="project-card relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] shadow-xl shadow-slate-600 duration-500 group md:cursor-pointer"
      onClick={toggleDetails}
    >
      <img
        className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        src={backgroundImg}
        alt={title}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/25 transition-all duration-500 ${
          isOpen ? "opacity-100 md:opacity-0 md:group-hover:opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"
        }`}
      />

      <div
        className={`absolute inset-0 z-10 flex items-end justify-center p-4 transition-all duration-500 ${
          isOpen ? "opacity-100 md:opacity-0 md:group-hover:opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"
        }`}
      >
        <div className="w-full max-w-[90%] rounded-2xl bg-white/95 p-4 text-center shadow-xl shadow-black/20">
          <h3 className="text-base sm:text-lg md:text-xl text-slate-700 font-bold tracking-wide leading-snug">
            {title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {desc}
          </p>

          <p className="mt-2 text-[11px] sm:text-xs text-slate-700 font-bold leading-relaxed">
            {tech}
          </p>

          <a href={projectUrl} target="_blank" rel="noreferrer" className="block mt-3">
            <button className="w-full rounded-xl bg-[linear-gradient(134deg,#3BF686_40.75%,#4CA9FF_90.52%)] px-4 py-2 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              Go to Website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
