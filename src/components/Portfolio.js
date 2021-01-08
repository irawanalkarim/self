import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../img/movie.png';
import project2 from '../img/crypto.png';

const useStyles = makeStyles({
	mainContainer: {
		background: "#212229",
		minHeight: "100vh"
	},
	cardContainer: {
		maxWidth: 345,
		margin: "5rem auto"
	}
});

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar/>
			<Grid container justify="center">
				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img" 
								alt="project" 
								height="140" 
								image={project1}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 1
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Simple movie app
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Live Demo
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item xs={12} sm={8} md={6}>
					<Card className={classes.cardContainer}>
						<CardActionArea>
							<CardMedia
								component="img" 
								alt="project" 
								height="140" 
								image={project2}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5">
									Project 2
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Cryptocurrency app
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Live Demo
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Portfolio;