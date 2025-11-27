import Aerosphere from "../assets/AeroSphere.png";
import bjaCoatings from "../assets/bjacoatings-com.png";
import pesonasumuttrans from "../assets/pesona-sumut-trans.png";

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
          title="Pesona Sumut Trans"
          backgroundImg={pesonasumuttrans}
          projectUrl="https://pesonasumuttrans.com"
          desc={"Profesional Company Profile PT. Pesona Sumut Trans"}
          tech="ReactJS and TailwindCSS"
        />

        <ProjectItem
          title="Bja Coatings"
          backgroundImg={bjaCoatings}
          projectUrl="https://epoxylantaimedan.com"
          desc={" Professional Company Profile CV. BJA Coatings"}
          tech="ReactJS and TailwindCSS"
        />
        <ProjectItem
          title="AeroSphere"
          backgroundImg={Aerosphere}
          projectUrl="https://aerosphere.netlify.app"
          desc={"Your Local Weather Monitor!"}
          tech="ReactJS, TailwindCSS, and Weather API"
        />
      </div>
    </div>
  );
};

export default Projects;
