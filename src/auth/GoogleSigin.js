import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleSigin() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse.credential);
        
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default GoogleSigin;
