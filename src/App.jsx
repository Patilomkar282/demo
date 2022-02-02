import React from "react";
import './App.css';
import Home from './Home.jsx';
import Profile from './Profile.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
  <Routes>
    <Route  exact path="/" element={<Home />} />
    <Route  path="/Profile" element={<Profile />} />
     </Routes>
</BrowserRouter>
    </div>
    
  );
}

export default App;