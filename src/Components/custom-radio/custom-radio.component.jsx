import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";
import * as React from "react";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      style={{ fontFamily: "Montserrat!important" }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function CustomizedRadios({ setSort, value }) {
  return (
    <FormControl>
      <RadioGroup
        defaultValue=""
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        onChange={(e) => setSort(e.target.value)}
        value={value}
        className="radio-container"
      >
        <FormControlLabel
          value="GROUP"
          control={<BpRadio />}
          label="All"
          className={`radios ${value === "GROUP" && "black"}`}
        />
        <FormControlLabel
          value="CITY_GROUP"
          control={<BpRadio />}
          label="City Group"
          className={`radios ${value === "CITY_GROUP" && "black"}`}
        />
        <FormControlLabel
          value="HOTEL_GROUP"
          control={<BpRadio />}
          label="Hotel Group"
          className={`radios ${value === "HOTEL_GROUP" && "black"}`}
        />
        <FormControlLabel
          value="LANDMARK_GROUP"
          control={<BpRadio />}
          label="Landmark Group"
          className={`radios ${value === "LANDMARK_GROUP" && "black"}`}
        />
        <FormControlLabel
          value="TRANSPORT_GROUP"
          control={<BpRadio />}
          label="Transport Group"
          className={`radios ${value === "TRANSPORT_GROUP" && "black"}`}
        />
      </RadioGroup>
    </FormControl>
  );
}
