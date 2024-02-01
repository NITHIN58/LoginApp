import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route, Routes,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Index";
import User from "./pages/user/User";



const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/LoginApp" element={<Login />} />
          <Route path="/LoginApp/home" element={<Home />} />
          <Route path="/LoginApp/user" element={<User />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
};
export default App;
