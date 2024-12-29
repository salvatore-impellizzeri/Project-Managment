import SideBar from './components/SideBar.jsx';
import FormProject from './components/FormProject.jsx';
import EmptyProject from './components/EmptyProject.jsx';

import { useState } from "react";

function App() {
  
  const [newProject, setNewProject] = useState(false);
  const [projects, setProject] = useState([]);

  function handleCreation(){
    return setNewProject(true);
  }

  function handleSavingProject(titleValue){
    setProject((prevProject) => [...prevProject, titleValue]);
    setNewProject(false);
  }

  return (
    <div className='pt-10 h-screen grid grid-cols-3 gap-x-10'>
      <div>
        <SideBar 
          onNewProject={handleCreation}
          projects={projects}
        />
      </div>
      <div className='col-span-2'>
        { newProject ? <FormProject onSavingProject={handleSavingProject}/> : <EmptyProject onNewProject={handleCreation} />}
      </div>
    </div>
  );
}

export default App;
