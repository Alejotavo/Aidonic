import { useEffect, useState } from 'react';
import './App.css'
import { EntityModel } from './Models/Entity'
import data from './../src/Data/Entities.json'
import Entity from './Components/Entity/Entity.js';


function App() {


  const [entities, setEntities] = useState<EntityModel[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  useEffect( () => {
   setEntities(data);
  }, []);

  console.log(entities)

  return (
    <>
      <div className="flex">
        <aside
          className={`absolute lg:relative inset-y-0 left-0 w-full sm:w-64 bg-sky-950 text-white transform transition-transform duration-300 z-40
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
          >
          <div className="p-4 flex justify-between">
              <img
                  src= "/logo.svg"
                  alt="logo"
                />
            <button onClick={toggleSidebar} className='md:hidden'>
              <img
                  src= "/close.svg"
                  alt="close"
              />
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Dashboard</li>
              <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Logout</li>
            </ul>
          </nav>
        </aside>
        <div className="flex flex-col flex-1">
          <header className="bg-white shadow p-4 flex justify-between">
            <div className="flex items-center space-x-4">
              <img
                  src= "/logo.svg"
                  alt="logo"
                  className='sm:hidden'
                />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <button   onClick={toggleSidebar} id="menu-toggle" className="block lg:hidden p-2 text-blue-800 border border-blue-800 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </header>
          <main className="flex-1 p-3 sm:p-6">
            <div id="react-wrapper">
              {entities?.map((entity, index) => {
                  return (
                    <Entity key={index} data={entity} />
                  );
                })}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
