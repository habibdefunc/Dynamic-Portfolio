import Aerosphere from "../assets/AeroSphere.png";
import bjaCoatings from "../assets/bjacoatings-com.png";
import pesonasumuttrans from "../assets/pesona-sumut-trans.png";
import rahmatnauliflora from "../assets/rahmatnauliflora.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="reveal-section w-full" style={{ animationDelay: '0.2s' }}>
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
          What Recent I have Build
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 sm:p-8 xl:grid-cols-3 xl:px-20">
        <ProjectItem
          title="Rahmat Nauli Flora (2026)"
          backgroundImg={rahmatnauliflora}
          projectUrl="https://rahmatnauli.com"
          desc={"Profesional Company Profile Rahmat Nauli Flora"}
          tech="ReactJS and TailwindCSS"
        />

        <ProjectItem
          title="AeroSense (2026)"
          backgroundImg={Aerosphere}
          projectUrl="https://aerosenses.vercel.app"
          desc={"Your Local Weather Monitor!"}
          tech="ReactJS, TailwindCSS, and WAQI API"
        />
        <ProjectItem
          title="Pesona Sumut Trans (2025)"
          backgroundImg={pesonasumuttrans}
          projectUrl="https://pesonasumuttrans.com"
          desc={"Profesional Company Profile PT. Pesona Sumut Trans"}
          tech="ReactJS and TailwindCSS"
        />

        <ProjectItem
          title="Bja Coatings (2025)"
          backgroundImg={bjaCoatings}
          projectUrl="https://epoxylantaimedan.com"
          desc={" Professional Company Profile CV. BJA Coatings"}
          tech="ReactJS and TailwindCSS"
        />
      </div>
    </div>
  );
};

export default Projects;
