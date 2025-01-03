
export default function SideBar({onNewProject, projects, onHandleActive, activeProject}) {

    return (
        <aside className="bg-[#100E0C] rounded-tr-2xl h-full py-16 px-8">
            <h2 className="uppercase font-bold text-white/90 text-2xl mb-10">
                your projects
            </h2>
            <button 
                onClick={onNewProject} 
                className="bg-[#322E2A] text-white/50 py-3 px-4 text-xl rounded-lg"
            >
                + Add Project
            </button>
            <ul className="mt-14">
                {projects.map((project, index) => (
                    <li 
                        key={index}
                        className="mb-2"
                        onClick={() => onHandleActive(index)}
                    >
                        <button className={`text-white/60 text-xl px-2 py-2 ${ activeProject === index ? 'bg-[#1C1816]' : '' } w-full text-left rounded-md`}>
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
} 