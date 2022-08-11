import React from 'react'
import {connect} from 'react-redux'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';


export const Contact = () => {

	return (
		  <Box sx={{ p: 4, my: 10 }} >
				 <Typography variant="h4" align="center" xs={{fontWeight: '300'}}>
						You are still there?? 
						<Typography variant="h2">
							I hope we can work together. 
						</Typography>
						<Typography variant="h2">
							Please feel free to download my resume
						</Typography>
						<Link color="inherit" href="http://localhost:8080/resume.pdf" style={{textDecoration:'none', cursor: 'pointer', fontWeight:'700'}} download>
							Point me!!
						</Link>
					</Typography>
      </Box>
	)
}


export default connect(Contact)