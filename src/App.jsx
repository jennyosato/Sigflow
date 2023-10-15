import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./components/login";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthLayout from "./components/auth";

import "./App.css";

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<AuthLayout/>}>
          <Route path="/" element={<Home />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
