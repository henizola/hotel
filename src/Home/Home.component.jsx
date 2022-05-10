import Hotels from "../Components/Hotels/hotels.component";
import CenteredTabs from "../Components/Tabs/Tabs.component";
import { Container } from "./Home.styles";
import Navigation from ".././Components/Navigation/Navigation.component";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadHotels } from "../store/hotels";

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const [filterString, setFilterString] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotels());
  }, [dispatch]);

  return (
    <Container>
      <Navigation />
      <CenteredTabs
        value={value}
        handleChange={handleChange}
        setFilterString={setFilterString}
        filterString={filterString}
      />
      <Hotels setFilterString={setFilterString} filterString={filterString} />
    </Container>
  );
};

export default HomePage;
