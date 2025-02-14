import { useEffect, useState } from 'react';
import './App.css'
import { EntityModel } from './Models/Entity'
import data from './../src/Data/Entities.json'
import Entity from './Components/Entity/Entity.js';


function App() {


  const [entities, setEntities] = useState<EntityModel[]>([])

  useEffect( () => {
   setEntities(data);
  }, []);

  console.log(entities)

  return (
    <>
    <h2 className="text-3xl font-medium text-gray-900 tracking-tight m-4">Entities List</h2>
      {entities?.map((entity, index) => {
        return (
          <Entity key={index} data={entity} />
        );
      })}
    </>
  )
}

export default App
