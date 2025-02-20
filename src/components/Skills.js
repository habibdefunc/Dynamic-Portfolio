/** @format */

import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiLaravel,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
        here are the tech stack I have
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  p-4 min-[1300px]:grid-cols-4 gap-8  justify-center items-center">
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[blue] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiTypescript className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Typescript</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[white] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiExpress className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Express</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[blue] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaReact className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">React</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[Orange] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiMysql className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">MySQL</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[green] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiPostgresql className="text-8xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl">PostgreSQL</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[blue] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
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
