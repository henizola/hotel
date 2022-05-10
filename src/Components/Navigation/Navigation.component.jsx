import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import logo from "../../logo.png";
import { Container } from "./Navigation.styles";

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <img src={logo} alt="" className="logo" />
      <Box
        sx={{ width: "100%" }}
        style={{ backgroundColor: "rgb(245, 250, 255) !important" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className="desktop"
        >
          <Tab label="Home" />

          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </Box>
    </Container>
  );
}
