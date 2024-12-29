import { useRef } from "react";

export default function FormProject({onSavingProject, setNewProject}) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);

    function handleCancel(){
        setNewProject(false);
    }

    function handleSubmit(e){
        e.preventDefault();
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const dateValue = dateRef.current.value;
        onSavingProject(titleValue, descriptionValue, dateValue);
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="h-full w-full flex flex-col justify-center items-center pr-48"
        >
            <div className="flex justify-end w-full">
                <button 
                    onClick={handleCancel}
                    type="button" 
                    className="py-2 px-7 text-xl font-medium rounded-lg text-[#1c1816]"
                >
                    Cancel
                </button>
                <button type="submit" className="py-2 px-7 text-xl font-normal rounded-lg bg-[#1c1816] text-white">
                    Save
                </button>
            </div>
            <div className="w-full grid gap-y-5">
                <div>
                    <label className="uppercase font-bold text-lg text-[#1C1816]/70" htmlFor="text">
                        title *
                    </label>
                    <input 
                        required
                        className="w-full font-medium px-2 py-2 rounded-sm border-2 border-transparent border-b-[#45413D]/20 h-10 bg-[#E1DFDD] focus:border-b-[#45413D] focus:outline-none focus:ring-0" 
                        type="text" 
                        ref={titleRef}
                    />
                </div>
                <div>
                <label className="uppercase font-bold text-lg text-[#1C1816]/70" htmlFor="textarea">
                    description
                </label>
                <textarea 
                    className="w-full font-medium px-2 py-2 rounded-sm border-2 border-transparent border-b-[#45413D]/20 h-20 bg-[#E1DFDD] focus:border-b-[#45413D] focus:outline-none focus:ring-0" 
                    type="textarea" 
                    ref={descriptionRef}
                />
                </div>
                <div>
                    <label className="uppercase font-bold text-lg text-[#1C1816]/70" htmlFor="date">
                        due date
                    </label>
                    <input 
                        className="w-full font-medium px-2 rounded-sm border-2 border-transparent border-b-[#45413D]/20 h-10 bg-[#E1DFDD] focus:border-b-[#45413D] focus:outline-none focus:ring-0" 
                        type="date" 
                        ref={dateRef}
                    />
                </div>
            </div>
        </form>
    );
} 