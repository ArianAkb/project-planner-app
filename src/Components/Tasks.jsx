import { useState } from "react"

export default function Tasks({onAddTask,onDeleteTask,tasks}) {
  const[enteredTask,setInteredTask] = useState("");
    
  function handleChange(event){
    setInteredTask(event.target.value)
    }
  function handleSaveTask(){
    if (enteredTask.trim() === ""){
        return;
    }
onAddTask(enteredTask);
setInteredTask("");

}
  
  
    return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none border-b-2 border-stone-300 focus:border-stone-600 text-stone-600"
          onChange={handleChange}
          value={enteredTask}
        />
        <button 
          onClick={handleSaveTask}
          className="text-stone-700 hover:text-stone-950 font-medium"
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 && (
        <p className="text-stone-500 my-4">This project does not have any tasks yet.</p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-4 rounded-md bg-stone-100 max-w-3xl">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center my-4 border-b border-stone-200 pb-2 last:border-none last:pb-0">
              <span className="text-stone-700">{task.text}</span>
              <button 
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-500 hover:text-red-600 transition-colors"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
    
}
