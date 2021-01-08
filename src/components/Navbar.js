import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { 
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Avatar,
	Divider,
	List,
	Typography,
	Box
} from "@material-ui/core";
import {
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	MenuSharp
} from "@material-ui/icons";
import avatar from '../img/avatar.png';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
	menuSliderContainer: {
		width: 250,
		height: "100%",
		background: "blue"
	},
	avatar: {
		display: "block",
		margin: "0.5rem auto",
		width: theme.spacing(13),
		height: theme.spacing(13)
	},
	listItem: {
		color: "#fff"
	}
}));

const menuItems = [
	{
		listIcon: <Home/>,
		listText: "Home",
		listPath: "/"
	},
	{
		listIcon: <AssignmentInd/>,
		listText: "About",
		listPath: "/about"
	},
	{
		listIcon: <Apps/>,
		listText: "Portfolio",
		listPath: "/portfolio"
	},
	{
		listIcon: <ContactMail/>,
		listText: "Contact",
		listPath: "/contacts"
	}
];

const Navbar = () => {

	const [ state, setState ] = useState({
		right: false
	});

	const toggleSlider = ((slider, open) => () => {
		setState({ ...state, [ slider ]: open });
	});

	const classes = useStyles();

	const sideList = slider => (
		<Box 
			className={classes.menuSliderContainer} 
			component="div" 
			onClick={toggleSlider(slider, false)}
		>
			<Avatar className={classes.avatar} src={avatar} alt="Budi Irawan"/>
			<Divider/>
			<List>
				{menuItems.map((lsItem, key) => (
				<ListItem button key={key} component={Link} to={lsItem.listPath}>
					<ListItemIcon style={{ color: "#fff" }} className={classes.ListItem}>{lsItem.listIcon}</ListItemIcon>
					<ListItemText style={{ color: "#fff" }} className={classes.ListItem} primary={lsItem.listText} />
				</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box component="nav">
				<AppBar position= "static" style={{ background: "#212229" }}>
					<Toolbar>
						<IconButton onClick={toggleSlider("left", true)}>
							<MenuSharp style={{ color: "#fff" }}/>
						</IconButton>
						<Typography variant="h5" style={{ color: "#fff" }}>Budi Irawan</Typography>
						<MobilRightMenuSlider anchor="left" open={state.left} onClose={toggleSlider("left", false)}>
							{sideList("left")}
							<Footer/>
						</MobilRightMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}

export default Navbar;