import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomizedRadios from "../custom-radio/custom-radio.component";
import Hotel from "../Hotel/hotel.component";
import { Container } from "./hotels.styles";

const Electronics = ({ filterString }) => {
  const [sorts, setSort] = useState("GROUP");

  let hotels = useSelector((state) => state.hotels.list);
  let loading = useSelector((state) => state.hotels.loading);

  return (
    <Container>
      <Grid container spacing={5} className="p-t-50 pr-12">
        <Grid item xs={12} lg={2.5}>
          <p>Filter</p>

          <Divider />
          <ul>
            <li>
              <CustomizedRadios setSort={setSort} value={sorts} />
            </li>
          </ul>
        </Grid>
        <Grid item xs={9.5} lg={9.5} style={{ marginTop: "30px" }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {loading ? (
                <div className="loader"></div>
              ) : hotels.suggestions ? (
                hotels.suggestions
                  .filter((p) => p.group.includes(sorts))
                  .map((el) =>
                    el.entities.map((hotel, index) => (
                      <Grid md={4} sm={1} className="p-6" key={index}>
                        <Hotel hotel={hotel} />
                      </Grid>
                    ))
                  )
              ) : (
                <h1 className="caption">Please Provile location</h1>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Electronics;
