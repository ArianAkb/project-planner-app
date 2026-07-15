import { useState, useEffect } from "react";
import NoProjectsSelected from "./Components/NoProjectsSelected";
import SideBar from "./Components/SideBar";
import NewProject from "./Components/NewProject";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState(() => {
    const savedData = localStorage.getItem("projectPlannerData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      return {
        ...parsedData,
        selectedProjectID: undefined,
      };
    }

    return {
      selectedProjectID: undefined,
      projects: [],
      tasks: [],
    };
  });

  useEffect(() => {
    localStorage.setItem("projectPlannerData",
      JSON.stringify({
        projects: projectsState.projects,
        tasks: projectsState.tasks,
      }));
  }, [projectsState.projects, projectsState.tasks]);

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID,
  );

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectID,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID,
        ),
        tasks: prevState.tasks.filter(
          (task) => task.projectID !== prevState.selectedProjectID,
        ),
      };
    });
  }

  const projectTasks = projectsState.tasks.filter(
    (task) => task.projectID === projectsState.selectedProjectID,
  );

  let content;
  if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectsSelected onClickAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onClickCancel={handleCancelAddProject}
      />
    );
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectTasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onDelete={handleDeleteProject}
      />
    );
  }

  return (
    <>
      <main className="flex h-screen w-screen bg-stone-50">
        <SideBar
          projects={projectsState.projects}
          onClickAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
          selectedProjectID={projectsState.selectedProjectID}
        />
        <div className="flex-1">{content}</div>
      </main>
    </>
  );
}

export default App;
