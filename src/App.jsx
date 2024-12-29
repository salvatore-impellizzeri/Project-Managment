import SideBar from './components/SideBar.jsx';
import FormProject from './components/FormProject.jsx';
import EmptyProject from './components/EmptyProject.jsx';
import Project from './components/Project.jsx';

import { useState } from "react";

function App() {
  
  const [newProject, setNewProject] = useState(false);
  const [projects, setProject] = useState([]);
  const [isActive, setIsActive] = useState(null);

  function handleCreation(){
    setNewProject(true);
    setIsActive(null);
  }

  function handleSavingProject(titleValue, descriptionValue, dateValue){
    setProject((prevProject) => [...prevProject, 
      {
        title: titleValue, 
        description: descriptionValue, 
        date: dateValue
      }]);
    setNewProject(false);
  }

  function handleActive(index){
    setIsActive(index);
    setNewProject(false);
  }

  return (
    <div className='pt-10 h-screen grid grid-cols-3 grid-rows-1 gap-x-12'>
      <div>
        <SideBar 
          onNewProject={handleCreation}
          projects={projects}
          onHandleActive={handleActive}
        />
      </div>
      <div className='col-span-2'>
        {newProject ? (
          <FormProject onSavingProject={handleSavingProject} />
        ) : isActive !== null ? (
          <Project project={projects[isActive]} /> 
        ) : (
          <EmptyProject onNewProject={handleCreation} />
        )}
      </div>
    </div>
  );
}

export default App;
