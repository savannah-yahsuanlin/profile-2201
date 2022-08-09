import React, {useState} from 'react'
import {connect} from 'react-redux'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
	typography : {
		fontFamily: 'granville, serif',
	}
});

theme = responsiveFontSizes(theme);


export const Home = props => {
  const {users} = props
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container elevation={0} sx={{backgroundColor: 'inherit', my:6, justifyContent: 'center', flexDirection: { xs: "column", md: "row"}}} >
        <Box sx={{display: 'flex', justifyContent:'center'}} >
          <CardMedia
            component="img"
            sx={{maxWidth:{xs: '400px', md:'400px'}, borderRadius: '5%'}}
            image="/me.png"
            alt="me.png"
          />
        </Box>
        <Box sx={{ mx: 6, my: 2}}>
          {users.map(ele => 
            <Box sx={{px:6, display:'flex', flexDirection: 'column'}} key={ele}>
              <Typography variant="h2" align="center" sx={{fontWeight:'500'}}>Hi there, I'm 
                <span style={{color: '#fdd24d', letterSpacing:'3.578px'}}>{ele.name}</span>
              </Typography>
              { window.innerWidth < 1024 ? 
                (<Typography variant='h4' paragraph sx={{maxWidth: '695px', fontWeight:'300', lineHeight: 1.35, wordBreak:'break-all'}}>
                  { isReadMore ? ele.bio.slice(0, 100) : ele.bio }
                    <span onClick={toggleReadMore} className="readOrHide">
                      {isReadMore ? " ...read more" : " show less"}
                    </span>
                </Typography>) 
              : 
              (
              <Typography variant='h4' paragraph sx={{maxWidth: '695px', fontWeight:'300', lineHeight: 1.35, wordBreak:'break-all'}}>
                  {ele.bio}
              </Typography>)
              }
              <Button size="small">Edit</Button>
            </Box>
           )}
        </Box>
         
      </Grid>
    </ThemeProvider>
  )
}

const mapState = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapState)(Home)
