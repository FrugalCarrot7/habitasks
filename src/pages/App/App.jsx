import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import PropertyPage from "../PropertyPage/PropertyPage";
import RoomPage from "../RoomPage/RoomPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [property, setProperty] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/property" element={<PropertyPage user = {user} 
            property = {property} setProperty = {setProperty} />} />

            <Route path="/room" element={<RoomPage user = {user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
