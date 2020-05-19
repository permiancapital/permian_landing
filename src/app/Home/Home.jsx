import React, { useState } from "react";
import { AppBar, Toolbar, TextField, LogoIcon } from "react95";
import Menu from "./Menu";

export const Home = () => {
  const [test, setTest] = useState();
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Menu />
        <TextField
          placeholder="Search..."
          width={150}
          style={{ marginLeft: 4 }}
        />
      </Toolbar>
    </AppBar>
  );
};
