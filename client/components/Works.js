import React from 'react'
import {connect} from 'react-redux'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
	typography : {
		fontFamily: 'granville, serif',
	}
});

theme = responsiveFontSizes(theme);

const Works = ({ works }) => {
	return (
		<ThemeProvider theme={theme}>
			<Grid container sx={{my:'15%', justifyContent: 'center', flexDirection: { xs: "column", md: "row"}}} >
				<Box sx={{ mx: 8, my: 2, textAlign: {xs: 'center', md: 'left'}}}>
					<Typography variant="h2" sx={{fontWeight:'500'}}>In the past, I enjoyed working in challenge projects</Typography>
				</Box>
				<Grid container spacing={4} maxWidth="lg">
					{works.map(work => (
						<Grid item key={work} xs={12} sm={6} md={4}>
							<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'inherit' }} elevation={0} >
								<CardActions>
									<Button size="small">Edit</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

const mapState = state => {
console.log(state.works)
  return {
    works:state.works
  }
}

export default connect(mapState)(Works)
