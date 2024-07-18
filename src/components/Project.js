import React from "react";

import absensi from "../assets/Selamat-Datang-Isti-.png";
import Diginomi from "../assets/localhost-5173.png";
import Aerosphere from "../assets/AeroSphere.png";
import bjaCoatings from "../assets/bjacoatings-com.png";
import tokobeliya from "../assets/Tokobeliya.png";
import jamaahku from "../assets/jamaahku.png";
import tiketku from "../assets/kereta1.png";
import RestApi from "../assets/jwt1.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
          What Recent I have Build
        </h1>
      </div>

      <div className="grid p-8 md:p-12 md:grid-cols-2 gap-8">
        <ProjectItem
          title="API-JWT (2024)"
          backgroundImg={RestApi}
          projectUrl="https://github.com/habibdefunc/API-JWT.git"
          tech="Node, Express, JWT and MySQL"
        />
        <ProjectItem
          title="Diginomik (2024)"
          backgroundImg={Diginomi}
          projectUrl="https://diginomik.com"
          tech="React JS, MySQL and Express"
        />
        <ProjectItem
          title="JamaahKu - Sistem Pengelolaan Data Jamaah Mesjid (2023)"
          backgroundImg={jamaahku}
          projectUrl=""
          tech="Laravel, Boostrap and MySQL"
        />
        <ProjectItem
          title="SI-ABSENSI (2023)"
          backgroundImg={absensi}
          projectUrl=""
          tech="React JS, Express and MySQL"
        />
        <ProjectItem
          title="TiketKu (2023)"
          backgroundImg={tiketku}
          projectUrl=""
          tech="Laravel, Boostrap and MySQL"
        />
        <ProjectItem
          title="AeroSphere (2023)"
          backgroundImg={Aerosphere}
          projectUrl="https://aerosphere.netlify.app"
          tech="React JS and Tailwind"
        />
        <ProjectItem
          title="Profile Company Bja Coatings (2023)"
          backgroundImg={bjaCoatings}
          projectUrl="https://bjacoatings.com"
          tech="React JS and Tailwind"
        />
        <ProjectItem
          title="Tokobeliya(2022)"
          backgroundImg={tokobeliya}
          projectUrl=""
          tech="React JS, Express, Tailwind and MySQL"
        />
      </div>
    </div>
  );
};

export default Projects;
