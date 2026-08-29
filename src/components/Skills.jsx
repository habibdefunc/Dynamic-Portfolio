import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="reveal-section" style={{ animationDelay: '0.16s' }}>
      <div className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
        here are the tech stack I have
      </div>
      <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <div className="skill-card min-h-[170px] p-6 shadow-xl rounded-xl bg-slate-400 text-navbar hover:scale-[1.02] ease-in duration-300 transition-all" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(49, 120, 198, 0.6)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
            <div className="m-auto">
              <SiTypescript className="text-7xl sm:text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">TypeScript</h3>
            </div>
          </div>
        </div>
        <div className="skill-card min-h-[170px] p-6 shadow-xl rounded-xl bg-slate-400 text-navbar hover:scale-[1.02] ease-in duration-300 transition-all" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(104, 160, 99, 0.6)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
            <div className="m-auto">
              <SiNodedotjs className="text-7xl sm:text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">Node.js</h3>
            </div>
          </div>
        </div>
        <div className="skill-card min-h-[170px] p-6 shadow-xl rounded-xl bg-slate-400 text-navbar hover:scale-[1.02] ease-in duration-300 transition-all" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(242, 146, 33, 0.6)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
            <div className="m-auto">
              <SiMysql className="text-7xl sm:text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">MySQL</h3>
            </div>
          </div>
        </div>
        <div className="skill-card min-h-[170px] p-6 shadow-xl rounded-xl bg-slate-400 text-navbar hover:scale-[1.02] ease-in duration-300 transition-all" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(51, 103, 145, 0.6)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
            <div className="m-auto">
              <SiPostgresql className="text-7xl sm:text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl">PostgreSQL</h3>
            </div>
          </div>
        </div>
        <div className="skill-card min-h-[170px] p-6 shadow-xl rounded-xl bg-slate-400 text-navbar hover:scale-[1.02] ease-in duration-300 transition-all" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(97, 218, 251, 0.6)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
            <div className="m-auto">
              <FaReact className="text-7xl sm:text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl">React.js</h3>
            </div>
          </div>
        </div>
        <div className="skill-card min-h-[170px] p-6 shadow-xl rounded-xl bg-slate-400 text-navbar hover:scale-[1.02] ease-in duration-300 transition-all" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(56, 189, 248, 0.6)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
          <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
            <div className="m-auto">
              <SiTailwindcss className="text-7xl sm:text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-xl sm:text-3xl lg:text-4xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
