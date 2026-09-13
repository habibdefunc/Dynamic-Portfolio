import { useState } from "react";

const ProjectItem = ({ title, backgroundImg, desc, tech, projectUrl, accounts = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accountDetails = accounts
    .filter(Boolean)
    .map(({ role, username, password }) => [
      { label: "Role", value: role },
      { label: "Username", value: username },
      { label: "Password", value: password },
    ].filter(({ value }) => value))
    .filter((details) => details.length > 0);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="project-card relative flex min-h-[320px] w-full sm:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)] items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#1a1a1a] shadow-xl shadow-slate-600 duration-500 group md:cursor-pointer"
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
        <div className="max-h-full w-full max-w-[90%] overflow-y-auto rounded-2xl bg-white/95 p-4 text-center shadow-xl shadow-black/20">
          <h3 className="text-base sm:text-lg md:text-xl text-slate-700 font-bold tracking-wide leading-snug">
            {title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {desc}
          </p>

          <p className="mt-2 text-[11px] sm:text-xs text-slate-700 font-bold leading-relaxed">
            {tech}
          </p>

          {accountDetails.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {accountDetails.map((details, accountIndex) => (
                <dl key={accountIndex} aria-label={`Account ${accountIndex + 1}`} className="min-w-0 space-y-2 rounded-lg bg-slate-100 p-2 text-left text-xs text-slate-700">
                  {details.map(({ label, value }) => (
                    <div key={label}>
                      <dt className="font-semibold">{label}</dt>
                      <dd className="break-words select-text">{value}</dd>
                    </div>
                  ))}
                </dl>
              ))}
            </div>
          )}

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
