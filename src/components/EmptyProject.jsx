export default function FormProject({onNewProject}) {
    return (
        <div className="w-full h-full flex flex-col items-center gap-y-5 justify-center">
            <div className="w-20">
                <img src="/logo.png" alt="logo" />
            </div>
            <h2 className="text-[#626060] font-bold text-2xl">
                No Project Selected
            </h2>
            <h3 className="text-[#626060]/70 text-xl font-medium">
                Select a project or het started with a new one
            </h3>
            <button 
                onClick={onNewProject}
                className="bg-[#322E2A] text-white/60 py-3 px-5 rounded-lg mt-6 text-lg"
            >
                Create a new project
            </button>
        </div>
    );
} 