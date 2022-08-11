import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Box} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "granville, serif",
  },
});

theme = responsiveFontSizes(theme);


const Navbar = (props) => (
  <div>
    <ThemeProvider theme={theme}>
      <nav>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2}}>
          <Link to="/home">Home</Link>
          <Link to="/works">Works</Link>
        </Box>
      </nav>
    </ThemeProvider>
  </div>
)


const mapState = (state) => {
  return {
    state
  }
}

export default connect(mapState)(Navbar)
