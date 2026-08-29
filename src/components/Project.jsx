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
          title="Rahmat Nauli Flora"
          backgroundImg={rahmatnauliflora}
          projectUrl="https://rahmatnauli.com"
          desc={"Profesional Company Profile Rahmat Nauli Flora"}
          tech="ReactJS and TailwindCSS"
        />
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
