import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  tasks,
  onAddTask,
  onDeleteTask,
  onDelete,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className=" items-center justify-center h-full pt-20 px-12">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between ">
          <h1 className=" text-4xl text-gray-600 mb-5"> {project.title} </h1>
          <button onClick={onDelete} className="pb-3">
            Delete
          </button>
        </div>
        <p className="font-light text-gray-800 mb-3">{formattedDate}</p>
        <p className="font-medium">{project.description}</p>
      </header>
      <div>
        <Tasks
          tasks={tasks}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}
