import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import PropertyPage from "../PropertyPage/PropertyPage";
import RoomPage from "../RoomPage/RoomPage";
import * as propertiesAPI from '../../utilities/properties-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [property, setProperty] = useState(null);
  const [switchy, setSwitchy] = useState(true);

  const navigate = useNavigate()

  useEffect(function() {
    async function getProperty() {
      let residences = await propertiesAPI.getAllProperties()
      console.log(`useEffect ${residences}`)
      setProperty(residences)
    }
    getProperty()
  }, [switchy])

  function addProperty(newProperty) {
    propertiesAPI.addAProperty(newProperty)
    setProperty([...property, newProperty])
  }
  

  async function updateProperty(houseId, updateProperty) {
    const updatedProperty = await propertiesAPI.updateAProperty(houseId, updateProperty)
    const newUpdatedProperty = {...updatedProperty}
    const foundHouse = property.findIndex(house => house._id === houseId)
    const newProperties = [...property]
    newProperties[foundHouse] = newUpdatedProperty
    console.log(`this is newProperties ${newProperties}`)
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
             property = {property} addProperty={addProperty} updateProperty={updateProperty}/>} />
            <Route path="/room" element={<RoomPage user = {user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
