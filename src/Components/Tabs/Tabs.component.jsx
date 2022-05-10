import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadHotels } from "../../store/hotels";
import { Container, SearchBar } from "./Tabs.styles";

export default function CenteredTabs({ value, setFilterString }) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: " 10px auto",
    border: "1px solid gray",
    textAlign: "left",
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(1),
      width: "100%!important",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  useEffect(() => {
    // Update the document title using the browser API
    setFilterString("");
  }, [value, setFilterString]);
  let products = useSelector((state) => state.hotels.list);

  const dispatch = useDispatch();

  const [searchString, setSearchString] = React.useState("Addis Ababa");

  const handleSearch = () => {
    dispatch({ type: "hotels/searchStringChanged", payload: searchString });
    dispatch(loadHotels());
  };

  return (
    <Container>
      <SearchBar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            value={searchString}
            key={123}
            autoFocus={true}
          />
        </Search>
        <button
          onClick={handleSearch}
          style={{ zIndex: "9999999999999999999999999" }}
        >
          search
        </button>
      </SearchBar>

      <h1>Hotels Near {products.term}</h1>
    </Container>
  );
}
