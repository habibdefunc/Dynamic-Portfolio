import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, backgroundImg, desc, tech, projectUrl }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-slate-600 rounded-xl group hover:bg-white hover:scale-[1.05] ease-in-out duration-500">
      {/* Gambar dengan ukuran tetap di mobile */}
      <img
        className="rounded-t-xl w-full h-48 sm:h-56 object-cover"
        src={backgroundImg}
        alt="/"
      />
      {/* Hover Box */}
      <div className="hidden group-hover:flex absolute inset-0 items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl text-slate-600 font-bold tracking-wider">
            {title}
          </h3>
          <p className="pt-2 text-sm sm:text-base text-slate-600 font-semibold">
            {desc}
          </p>
          <p className="pb-4 pt-2 text-sm sm:text-base text-slate-600 font-bold">
            {tech}
          </p>
          <Link to={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-navbar font-bold text-sm sm:text-lg cursor-pointer hover:shadow-md hover:shadow-slate-500 ease-in duration-500">
              Go to Website
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
