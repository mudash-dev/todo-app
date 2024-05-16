import React from "react";


export default function TodoItem(
    { task, deleteTask, toggleCompleted }
) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <section>
            <div className="todo-item">
                <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
                />
                <p>{task.text}</p>
                <button onClick={() => deleteTask(task.id)}>
                    X
                </button>
            </div>
        </section>
    );

}