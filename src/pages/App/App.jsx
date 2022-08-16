import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import PropertyPage from "../PropertyPage/PropertyPage";
import RoomPage from "../RoomPage/RoomPage";
import TaskPage from "../TaskPage/TaskPage";
import * as propertiesAPI from '../../utilities/properties-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [property, setProperty] = useState(null);
  const [switchy, setSwitchy] = useState(true);


  useEffect(function() {
    async function getProperty() {
      let residences = await propertiesAPI.getAllProperties()
      setProperty(residences)
    }

    if (user){
      getProperty()
    } else {

    }
    
  }, [switchy, user])

  async function addProperty(newProperty) {
    const newestProp = await propertiesAPI.addAProperty(newProperty)
    setProperty([...property, newestProp])
  }

  async function deleteProperty(delProperty) {
    const newProperties = await propertiesAPI.deleteProperty(delProperty)
    // const propertyCopy = [...property]
    console.log(newProperties)
    // const newProperties = propertyCopy.filter(p => p._id === delProperty._id)
    setProperty(newProperties)
} 
  

  async function updateProperty(houseId, updateProperty) {
    const updatedProperty = await propertiesAPI.updateAProperty(houseId, updateProperty)
    const newUpdatedProperty = {...updatedProperty}
    const foundHouse = property.findIndex(house => house._id === houseId)
    const newProperties = [...property]
    newProperties[foundHouse] = newUpdatedProperty
    setProperty(newProperties)
    setSwitchy(!switchy)
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<PropertyPage user = {user}
             property = {property} addProperty={addProperty} updateProperty={updateProperty}
             deleteProperty={deleteProperty}/>} />
             <Route path='/:selectedProperty' element={<RoomPage 
             useState={ useState }/>}/>
             <Route path='/:selectedProperty/tasks/:selectedRoom' element={ <TaskPage useState= { useState } />} />
            
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
