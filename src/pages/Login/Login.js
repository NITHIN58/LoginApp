import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSigin from "../../auth/GoogleSigin";
import LinkedInButton from "../../auth/LinkedInButton";
import LinkedInPage from "../../auth/LinkedInButton";


const Login = () => {
    const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(token !== null);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const onChange = (e) => {
    if (e.target.name === "email") {
        setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const 
  
  
  
  
  submitForm = (e) => {
    e.preventDefault();
    // login security
    if (email === "admin@example.com" && password === "pass@123") {
      localStorage.setItem("token", "Nithin12345");
      setLoggedIn(true);
    }
    else {
        setInvalidCredentials(true);
      }
  };

  if (loggedIn) {
    return navigate("/LoginApp/home");
  }

  return (
    <div className="sigin">
      <div className="container card border pt-5 pb-5" style={{ width: "350px" }}>
        <h1 className="text-center">LogIn</h1>
        <form
          className=""  
          name="loginform"
          id="loginform"
          action="https://themes.getbootstrap.com/wp-login.php"
          method="post"
          onSubmit={submitForm}
        >
          <div className="form-group mt-4">
                    <input
                      type="email"
                      name="email"
                      id="user_login"
                      className="form-control"
                      value={email}
                      onChange={onChange}
                      size="20"
                      placeholder="Email"
                      required
                    />
          </div>
          <div className="form-group mt-4">
            <input
              type="password"
              name="password"
              id="user_pass"
              className="form-control"
              value={password}
              onChange={onChange}
              size="20"
              placeholder="Password"
              required
            />
          </div>
          {invalidCredentials && <p style={{ color: "red", display:"flex", justifyContent:"center" }}>Invalid email or password</p>}
          <div className="form-group mt-4">
            <input
              type="submit"
              name="wp-submit"
              id="wp-submit"
              className="btn btn-primary w-100"
              value="Sign In"
            />
          </div>
        </form>
        <div className="form-group mt-4">
        <GoogleSigin/>
        </div>
        <div className="form-group mt-4">
        <LinkedInPage/>
        </div>

       
    
      </div>
      <div className="card text-success  text-center mt-4" style={{ width: "350px", margin: "0 auto" }}>
        username="admin@example.com " password="pass@123"
      </div>
    </div>
  );
};

export default Login;