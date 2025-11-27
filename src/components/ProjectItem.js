import { Link } from "react-router-dom";

const ProjectItem = ({ title, backgroundImg, desc, tech, projectUrl }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full shadow-xl shadow-slate-600 rounded-xl group overflow-hidden hover:scale-[1.05] duration-500">
      {/* Gambar tampil UTUH */}
      <img
        className="rounded-xl w-full object-contain bg-black"
        src={backgroundImg}
        alt={title}
      />

      {/* Overlay Hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[85%] max-w-sm text-center">
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
            <p className="text-center py-3 rounded-lg bg-[linear-gradient(134deg,#3BF686_40.75%,#4CA9FF_90.52%)] font-bold text-sm sm:text-lg cursor-pointer hover:shadow-md hover:shadow-slate-500 duration-300">
              Go to Website
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
