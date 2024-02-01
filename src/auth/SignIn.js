import React from "react";

function SignIn() {
  return (
    <div className="sigin">
      <h1>Sign In</h1>
      <form>
        <div className="signIn-elemet">
          <input type="email" placeholder="emial" required />
        </div>
        <div>
          <input type="password" placeholder="******" required />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}

export default SignIn;
