import React from "react";
import BasicModal from "../modal/custom-modal";
import { Container } from "./hotel.styles";

import ExternalStateExample from "../Map/map";

const Hotel = ({ hotel }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container className="pt-6 pl-5 pr-5">
      <div className="sections">
        <span>Name:</span> {hotel.name}
        <span>Type:</span>{" "}
        <span dangerouslySetInnerHTML={{ __html: hotel.type }} />
      </div>
      <button onClick={handleOpen}>view on map</button>
      <BasicModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        hotel={hotel}
      />
      {/* <ExternalStateExample /> */}
    </Container>
  );
};

export default Hotel;
