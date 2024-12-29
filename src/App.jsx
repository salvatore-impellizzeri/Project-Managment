import SideBar from './components/SideBar.jsx';
import FormProject from './components/FormProject.jsx';
import EmptyProject from './components/EmptyProject.jsx';

import { useState } from "react";

function App() {

  const [newProject, setNewProject] = useState(false);

  function handleCreation(){
      return setNewProject(true);
  }

  return (
    <div className='pt-10 h-screen grid grid-cols-3 gap-x-10'>
      <div>
        <SideBar onNewProject={handleCreation} />
      </div>
      <div className='col-span-2'>
        { newProject ? <FormProject /> : <EmptyProject onNewProject={handleCreation} />}
      </div>
    </div>
  );
}

export default App;
