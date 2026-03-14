import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiLaravel,
  SiGo,
  SiExpress,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
        here are the tech stack I have
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-[1300px]:w-[calc(25%-2rem)] p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[skyblue] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiGo className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Go</h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-[1300px]:w-[calc(25%-2rem)] p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[white] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiExpress className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Express</h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-[1300px]:w-[calc(25%-2rem)] p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[green] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiPostgresql className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl">PostgreSQL</h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-[1300px]:w-[calc(25%-2rem)] p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[Orange] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiMysql className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">MySQL</h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-[1300px]:w-[calc(25%-2rem)] p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[blue] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaReact className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">React</h3>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-[1300px]:w-[calc(25%-2rem)] p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[blue] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiTailwindcss className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Tailwind</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
