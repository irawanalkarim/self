import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles( theme => ({
	mainContainer: {
		background: "blue"
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "0 auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid white",
			right: "40px",
			top: 0
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both"
		},
		[ theme.breakpoints.up("md") ]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto"
			}
		}
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid white",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute"
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "red red transparent transparent",
			borderWidth: "0.625",
			transform: "rotate(45deg)"
		},
		[ theme.breakpoints.up("md") ]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: "white"
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent red red"
			}
		}
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		background: "red",
		color: "white",
		lineHeight: 1,
		padding: "0.5rem 0 1rem",
		"&:before": {
			display: "none"
		},
		[ theme.breakpoints.up("md") ]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto"
			},
			"&:nth-of-type(2n):before": {
				display: "none"
			}
		}
	},
	heading: {
		color: "white",
		padding: "3rem 0",
		textTransform: "uppercase"
	},
	subHeading: {
		color: "white",
		padding: "0",
		textTransform: "uppercase"
	}
}));

const About = () => {
	const classes = useStyles();
	return (
		<>
			<Navbar/>
			<Box component="header" className={classes.mainContainer}>
				<Typography variant="h4" align="center" className={classes.heading}>
					About Me
				</Typography>
				<Box component="div" className={classes.timeLine}>
					<Box component="div" className={classes.timeLineItem}>
						<Typography 
							variant="h5" 
							align="center" 
							className={classes.subHeading}>
							Intro
						</Typography>
						<Typography 
							variant="subtitle1" 
							align="center" 
							style={{ color: "white"}}>
							My name is Budi Irawan, I am an alumnus of the State Vocational High School 1 Tengaran majoring in informatics engineering with a concentration in software engineering
						</Typography>
					</Box>

					<Box component="div" className={classes.timeLineItem}>
						<Typography 
							variant="h5" 
							align="center" 
							className={classes.subHeading}>
							My Profile
						</Typography>
						<Typography 
							variant="subtitle1" 
							align="left" 
							style={{ color: "white"}}
						>
							Name : Budi Irawan <br/>
							Birth : December 5th 1994 <br/>
							Address : Babadan, Duren, Tengaran, Kab.Semarang<br/>
							Gender : Male <br/>
							Phone : +6285559169235 <br/>
							Email : irawanalkarim@gmail.com <br/>
							Github : irawanalkarim 
						</Typography>
					</Box>

					<Box component="div" className={classes.timeLineItem}>
						<Typography 
							variant="h5" 
							align="center" 
							className={classes.subHeading}>
							Education
						</Typography>
						<Typography 
							variant="subtitle1" 
							align="left" 
							style={{ color: "white"}}
						>
							School : SMK N 1 Tengaran <br/>
							Majors : Rekayasa Perangkat Lunak <br/>
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default About;