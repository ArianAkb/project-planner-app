import { useRef } from "react";

export default function NewProject({ onClickCancel, onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      alert("Please fill out all fields!");
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }
  return (
    <div className="  mt-16 pt-20 px-12">
      <nav className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={onClickCancel}
          className="text-stone-850 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </nav>
      <form action="">
        <div className="flex flex-col gap-1 my-4">
          <label>TITLE</label>
          <input
            ref={titleRef}
            type="text"
            required
            className="bg-mist-100 py-1.5 pl-1"
          />
        </div>
        <div className="flex flex-col gap-1 my-4">
          <label>DESCRIPTION</label>
          <input
            ref={descriptionRef}
            type="text"
            required
            className="bg-mist-100 py-3 pl-1"
          />
        </div>
        <div className="flex flex-col gap-1 my-4">
          <label>DUE DATE</label>
          <input
            ref={dateRef}
            type="date"
            required
            className="bg-mist-100 py-1.5 pl-1"
          />
        </div>
      </form>
    </div>
  );
}
