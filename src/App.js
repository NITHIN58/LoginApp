import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route, Routes,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Index";
import User from "./pages/user/User";


//import Home from "./pages/Home/Home";
//import Task from "./pages/Task/Task";
//import User from "./pages/User/User";
//import Changepassword from "./pages/User/Changepassword";

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/task" element={<Task />} /> */}
          <Route path="/user" element={<User />} />
          {/* <Route path="/changepassword" element={<Changepassword />} /> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
};
export default App;
