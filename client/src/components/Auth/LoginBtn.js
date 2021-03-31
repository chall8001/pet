import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";
import "./BtnStyle.css";

function LoginBtn() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button id="logbtn" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
}

export default LoginBtn;
