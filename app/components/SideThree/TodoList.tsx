import React from "react";

const TodoList = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-between overflow-hidden p-1">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Frontend Practice Project
          </p>
          <h1 className="text-xl font-bold text-slate-950">
            Todo List Web App
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 xl:text-base">
            A responsive To-Do List application built with
Next.js and TailwindCSS.Users can add, delete,
edit tasks, and mark tasks as completed.All
data is stored in LocalStorage, ensuring tasks
persist across page reloads.The project
emphasizes clean UI, state management, and
practical use of modern React patterns.
          </p>
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-blue-600">Tech:</span> React,
            Tailwind CSS, LocalStorage
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
