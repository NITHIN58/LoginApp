    import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Countrydata from "./CountryData";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token !== null);

  useEffect(() => {
    if (!loggedIn) {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return <Link to="/LoginApp/" />;
  }

  return (
    <div>
      <Navbar />
      <Countrydata />
    </div>
  );
};

export default Home;