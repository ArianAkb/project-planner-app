import noProjectsImg from "../assets/no-projects.png";

export default function NoProjectsSelected({ onClickAddProject }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center mt-16">
      <img
        src={noProjectsImg}
        alt="no-projects"
        className="w-20 h-20"
      />
      <h1 className=" text-xl font-bold text-orange-950">
        No Projects Selected
      </h1>
      <p>Select a project or get started with a new one</p>
      <button
        onClick={onClickAddProject}
        className=" px-4 py-1.5 border rounded text-gray-300 bg-stone-700 hover:text-gray-100 hover:bg-stone-900"
      >
        Create new project
      </button>
    </div>
  );
}
