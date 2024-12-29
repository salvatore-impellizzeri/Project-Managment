import { useRef, useState } from "react";

export default function Project({ project, deleteProject }) {

    const taskRef = useRef();
    const [tasks, setTasks] = useState([]);

    function handleTask(){
        const taskValue = taskRef.current.value;
        setTasks((prevTask) => [taskValue, ...prevTask])
        taskRef.current.value = '';
    }

    function handleClear(index){
        setTasks((prevTask) => prevTask.filter((_, id) => id !== index));
    }

    return (
      <div className="pt-20 pr-48">
        <div className="relative">
            <h2 className="text-[#434242] font-bold text-4xl">
                {project.title}
            </h2>
            <p className="mt-2 text-xl text-black/40 font-medium">
                {project.date}
            </p>
            <p className="text-lg text-black font-medium mt-4">
                {project.description}
            </p>
            <button 
                onClick={deleteProject} 
                type="button" 
                className="absolute top-0 right-0 py-2 px-7 text-xl font-medium rounded-lg text-[#1c1816]"
            >
                Delete
            </button>
        </div>
        <hr className="my-5 h-[3px] bg-black/20"/>
        <div>
            <h2 className="text-[#434242] font-bold mb-4 text-3xl">
                Tasks
            </h2>
            <input 
                className="w-5/12 font-medium px-2 py-2 rounded-sm border-2 border-transparent h-10 bg-[#E1DFDD]" 
                type="text"
                ref={taskRef} 
            />
            <button
                onClick={handleTask}
                className="py-2 px-7 text-xl font-medium rounded-lg text-[#1c1816]"
            >
                Add Task
            </button>
            { tasks.length === 0 ? 
                <p className="mt-4 font-medium text-lg">
                    This project does not have any tasks yet.
                </p>
                :
                <div className="bg-[#F2F2F2] py-8 px-4 mt-8 rounded-lg overflow-y-auto max-h-96">
                    <ul className="grid gap-y-4">
                        {tasks.map((task, index) => (
                            <li
                                className="text-lg flex justify-between items-center"
                                key={index}
                            >
                                <span className="font-medium">
                                    {task}
                                </span>
                                <button 
                                    onClick={() => handleClear(index)}
                                    type="button" 
                                    className="py-2 px-7 font-medium rounded-lg text-[#1c1816]"
                                >
                                    Clear
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
      </div>
    );
  }
