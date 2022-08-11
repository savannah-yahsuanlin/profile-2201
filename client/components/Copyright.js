import * as React from 'react'
import {connect} from 'react-redux'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright = () => {
	return (
		  <Box sx={{ p: 4 }} component="footer">
				 <Typography variant="body2" color="inherit" align="center">
						{'Copyright © '}
						<Link color="inherit" href="" style={{textDecoration:'none', cursor: 'pointer'}}>
							Savannah Lin
						</Link>{' '}
						{new Date().getFullYear()}
						{'.'}
					</Typography>
      </Box>
	)
}


export default connect(Copyright)