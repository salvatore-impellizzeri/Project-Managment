import SideBar from './components/SideBar.jsx';
import FormProject from './components/FormProject.jsx';
import EmptyProject from './components/EmptyProject.jsx';
import Project from './components/Project.jsx';

import { useState } from "react";

function App() {
  
  const [newProject, setNewProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isActive, setIsActive] = useState(null);

  const buttonTransparentClasses = "py-2 px-7 text-xl font-medium rounded-lg text-[#1c1816]"

  function handleCreation(){
    setNewProject(true);
    setIsActive(null);
  }

  function handleSavingProject(titleValue, descriptionValue, dateValue){
    
    let formattedDate = null;

    if(dateValue){
      const date = new Date(dateValue);
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    }

    setProjects((prevProject) => [...prevProject, 
      {
        title: titleValue, 
        description: descriptionValue, 
        date: formattedDate ? formattedDate : dateValue,
      }]);

    setNewProject(false);
  }

  function handleActive(index){
    setIsActive(index);
    setNewProject(false);
  }

  function handleDelete(){
    setProjects((prevProjects) => prevProjects.filter((_, index) => index !== isActive));
    setIsActive(null);
    setNewProject(false);
  }

  return (
    <div className='pt-10 h-screen grid grid-cols-3 grid-rows-1 gap-x-12'>
      <div>
        <SideBar 
          onNewProject={handleCreation}
          projects={projects}
          onHandleActive={handleActive}
          activeProject={isActive}
        />
      </div>
      <div className='col-span-2'>
        {newProject ? (
          <FormProject 
            buttonTransparentClasses={buttonTransparentClasses}
            onSavingProject={handleSavingProject} 
            setNewProject = {setNewProject}
          />
        ) : isActive !== null ? (
          <Project 
            project={projects[isActive]} 
            deleteProject={handleDelete}
            buttonTransparentClasses={buttonTransparentClasses}
          /> 
        ) : (
          <EmptyProject onNewProject={handleCreation} />
        )}
      </div>
    </div>
  );
}

export default App;
