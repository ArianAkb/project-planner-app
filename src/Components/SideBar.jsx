
export default function SideBar({ onClickAddProject, projects,onSelectProject,selectedProjectID }) {
  return (
    <aside class=" w-1/3 h-screen mt-10 md:w-72 px-8 py-16  text-stone-50 bg-stone-900 rounded-r-xl ">
      <h2 class="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={onClickAddProject}
          class="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition-colors"
        >
          +Add Projects
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          const isActive = project.id === selectedProjectID;
          
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 transition-colors hover:text-stone-200 hover:bg-stone-800";
          if (isActive) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button 
                onClick={() => onSelectProject(project.id)} 
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
