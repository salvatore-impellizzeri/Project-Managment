import { useRef } from "react";

export default function FormProject({onSavingProject, setNewProject, buttonTransparentClasses}) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);
    
    const inputClasses = `w-full font-medium px-2 py-2 rounded-sm border-2 border-transparent border-b-[#45413D]/20 h-10 bg-[#E1DFDD] focus:border-b-[#45413D] focus:outline-none focus:ring-0`
    const labelClasses = 'uppercase font-bold text-lg text-[#1C1816]/70'

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
                    className={buttonTransparentClasses}
                >
                    Cancel
                </button>
                <button type="submit" className="py-2 px-7 text-xl font-normal rounded-lg bg-[#1c1816] text-white">
                    Save
                </button>
            </div>
            <div className="w-full grid gap-y-5">
                <div>
                    <label className={labelClasses} htmlFor="text">
                        title *
                    </label>
                    <input 
                        required
                        className={inputClasses} 
                        type="text" 
                        ref={titleRef}
                    />
                </div>
                <div>
                <label className={labelClasses} htmlFor="textarea">
                    description
                </label>
                <textarea 
                    className={`${inputClasses} h-20`} 
                    type="textarea" 
                    ref={descriptionRef}
                />
                </div>
                <div>
                    <label className={labelClasses} htmlFor="date">
                        due date
                    </label>
                    <input 
                        className={inputClasses} 
                        type="date" 
                        ref={dateRef}
                    />
                </div>
            </div>
        </form>
    );
} 