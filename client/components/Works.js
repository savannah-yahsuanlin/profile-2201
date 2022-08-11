import React from "react";
import { connect } from "react-redux";
import {Link, Route} from 'react-router-dom'
import UpdateWork from './UpdateWork';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from '@mui/material/Avatar';

const Works = ({ works }) => {
  return (
		<>
      <Grid
        container
        sx={{
          my: 2,
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ mx: 8, my: 1, textAlign: { xs: "center"} }}>
          <Typography variant="h2" sx={{ fontWeight: "500" }}>
            I enjoyed working on challenge projects
          </Typography>
        </Box>
        <Grid container spacing={4} maxWidth="lg" sx={{justifyContent: {xs:'center', md: 'left'}}}>
          {works?.map((work) => (
            <Grid item key={work.id} xs={8} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "inherit",
                }}
              >
							<CardContent sx={{ flexGrow: 1 }}>
								<Box sx={{ display: 'flex', alignItems: 'center'}}>
									<Typography gutterBottom variant="h4" sx={{fontWeight: '700', flexGrow: 1}}>
										{work.name}
									</Typography>
									<Avatar sx={{ width: 50, height: 50}} alt={work.name} src={work.img}></Avatar>
								</Box>
								<Typography gutterBottom variant="h5" sx={{ fontWeight: "300" }}>
									{work.location}
								</Typography>
								<Typography gutterBottom variant="h5" sx={{ fontWeight: "300" }}>
									{work.title}
								</Typography>
								<Box sx={{ display: 'flex', alignItems: 'center'}}>
									<Typography variant="h6" sx={{ fontWeight: "300" }}>
										{work.startDate.slice(0,10)} <span>~</span> {work.endDate.slice(0, 10)}
									</Typography>
								</Box>
							</CardContent>
							<CardActions>
								<Button size="small"><Link to={`/works/${work.id}/edit`}>Edit</Link></Button>
							</CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
			<Route exact path="/works/:id/edit" component={UpdateWork}/>
		</>
  );
};

const mapState = (state) => {
console.log(state)
  return {
    works: state.works,
  };
};

export default connect(mapState)(Works);
