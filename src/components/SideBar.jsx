
export default function SideBar({onNewProject}) {

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
            <ul>
                <li></li>
            </ul>
        </aside>
    );
} 