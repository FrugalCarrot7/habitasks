import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import PropertyPage from "../PropertyPage/PropertyPage";
import RoomPage from "../RoomPage/RoomPage";
import * as propertiesAPI from '../../utilities/properties-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [property, setProperty] = useState(null);

  useEffect(function() {
    async function getProperty() {
        let residences = await propertiesAPI.getAllProperties()
        console.log(residences)
        setProperty(residences)
    }
    getProperty()
  }, [])

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/property" element={<PropertyPage user = {user} property = {property}/>} />
            <Route path="/room" element={<RoomPage user = {user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
