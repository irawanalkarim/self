import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
	root: {
		"& .MuiBottomNavigationAction-root": {
			minWidth: 0,
			maxWidth: 250,
		},
		"& .MuiSvgIcon-root": {
			fill: "white",
			"&:hover": {
				fill: "blue",
				fontSize: "1.8rem"
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<BottomNavigation width="auto" style={{ background: "#212229" }}>
			<BottomNavigationAction 
				className={ classes.root }
				style={{ padding: 0 }} 
				icon={ <GitHub/> }
			/>

			<BottomNavigationAction 
				className={ classes.root }
				style={{ padding: 0 }} 
				icon={ <LinkedIn/> }
			/>

			<BottomNavigationAction 
				className={ classes.root }
				style={{ padding: 0 }} 
				icon={ <Twitter/> }
			/>
		</BottomNavigation>
	)
}

export default Footer;