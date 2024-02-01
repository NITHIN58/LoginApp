import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
  const [islogout, setIslogout] = useState(false);

  const signOut = () => {
    localStorage.removeItem("token");
    setIslogout(true);
  };

  if (islogout) {
    return navigate("/LoginApp/");
  }
    return (
      <div>
        <Navbar />
        <div className="mt-5">
          <form style={{ fontWeight: "600" }}>
            <div
              class="form-group"
              style={{
                maxWidth: "450px",
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <label for="staticEmail" class="col-form-label">
                Username :-
              </label>
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="staticEmail"
                  value="admin"
                />
              </div>
            </div>
            <div
              class="form-group"
              style={{
                maxWidth: "465px",
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <label for="inputPassword" class="col-form-label">
                Password :-
              </label>
              <div class="">
                <input
                  type="password"
                  class="form-control border-0"
                  id="inputPassword"
                  value="123"
                />
              </div>
            </div>
          </form>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "380px",
            marginLeft: "50px",
            marginTop: "250px"
          }}
        >
          <div>
            <NavLink class="nav-link" to="/changepassword">
              <button
                type="button"
                class="btn border-secondary"
                style={{
                  background: "none",
                  borderRadius: "5px 5px",
                  padding: "3px 15px"
                }}
              >
                Change Password
              </button>
            </NavLink>
          </div>
          <div className="mt-2">
            {" "}
            <button
              onClick={signOut}
              type="button"
              class="btn btn-light border-secondary"
              style={{
                background: "none",
                borderRadius: "5px 5px",
                padding: "3px 45px"
              }}
            >
              {" "}
              Logout
            </button>{" "}
          </div>
        </div>
      </div>
    );
  }

export default User