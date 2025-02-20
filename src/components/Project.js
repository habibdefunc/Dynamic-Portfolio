import React from "react";

import absensi from "../assets/Selamat-Datang-Isti-.png";

import Aerosphere from "../assets/AeroSphere.png";
import bjaCoatings from "../assets/bjacoatings-com.png";
import sijara from "../assets/Picture1.png";
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
          title="SIJARA (2025)"
          backgroundImg={sijara}
          projectUrl=""
          desc={" Sistem Informasi Penjadwalan Rapat"}
          tech="ExpressJS, Typescript,ReactJS, TailwindCSS and MySQL"
        />
        <ProjectItem
          title="API-JWT (2024)"
          backgroundImg={RestApi}
          projectUrl="https://github.com/habibdefunc/API-JWT.git"
          desc={"Restfull API Menggunakan JWT"}
          tech="ExpressJS, JWT and MySQL"
        />
        <ProjectItem
          title="SI-ABSENSI (2023)"
          backgroundImg={absensi}
          projectUrl=""
          desc={"Web Absensi Siswa Untuk Sekolah."}
          tech="ReactJS, ExpressJS and MySQL"
        />
        <ProjectItem
          title="AeroSphere (2023)"
          backgroundImg={Aerosphere}
          projectUrl="https://aerosphere.netlify.app"
          desc={"Web Pemantau Cuaca Di Sekitar Anda!"}
          tech="ReactJS, and TailwindCSS"
        />
        <ProjectItem
          title="Bja Coatings (2023)"
          backgroundImg={bjaCoatings}
          projectUrl="https://bjacoatings.com"
          desc={" Profile Company Bja Coatings"}
          tech="ReactJS, and TailwindCSS"
        />
      </div>
    </div>
  );
};

export default Projects;
