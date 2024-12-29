export default function Project({ project }) {
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
            <button type="button" className="absolute top-0 right-0 py-2 px-7 text-xl font-medium rounded-lg text-[#1c1816]">
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
            />
            <button className="py-2 px-7 text-xl font-medium rounded-lg text-[#1c1816]">
                Add Task
            </button>
        </div>
      </div>
    );
  }