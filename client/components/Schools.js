import React from "react";
import { connect } from "react-redux";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Schools = ({ schools }) => {
  return (
    <Grid
      container
      sx={{
        my: 4,
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ mx: 8, my: 2, textAlign: { xs: "center" } }}>
        <Typography variant="h2" sx={{ fontWeight: "500" }}>
          These backgrounds help me sharp my skills
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        maxWidth="lg"
        sx={{ justifyContent: { xs: "center", md: "left" }, my: 3 }}
      >
        {schools.map((school) => (
          <Grid item key={school.id} xs={8} sm={6} md={6}>
            <Typography gutterBottom variant="h4" sx={{ fontWeight: "700" }}>
              {school.name}
            </Typography>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: "300" }}>
              {school.degree}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const mapState = (state) => {
  return {
    schools: state.schools,
  };
};

export default connect(mapState)(Schools);
