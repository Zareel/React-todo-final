import React, { useState } from "react";

const UpdateTodoForm = ({ taskName, updateTask, task }) => {
  const [value, setValue] = useState(taskName);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    updateTask(value, task.id);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-stone-700 px-2 rounded-md border-none outline-none"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          
        />
        <button type="submit" className="bg-stone-700 ml-4  px-4 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default UpdateTodoForm;
