import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, hotel }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {hotel.name}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            dangerouslySetInnerHTML={{ __html: hotel.caption }}
          ></Typography>
        </Box>
      </Modal>
    </div>
  );
}
