import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";
import "./BtnStyle.css";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <Button
      id="logbtn"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </Button>
  );
};

export default LogoutBtn;
