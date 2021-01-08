import React from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { 
	TextField,
	Typography,
	Button,
	Grid,
	Box
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	form: {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		position: "absolute",
	},
	button: {
		marginTop: "1rem",
		color: "white",
		borderColor: "white"
	}
}));

const InputField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "white",
		},
		"& label": {
			color: "white",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "white",
			},
			"& .Mui-focused fieldset": {
				borderColor: "white",
			},
		},
	},
})(TextField);

const Contacts = () => {
	const classes = useStyles();
	return (
		<Box component="div">
			<Navbar/>
			<Grid container justify="center">
				<Box component="form" className={classes.form} >
					<Typography 
						variant="h5" 
						style={{
							color: "white", 
							textAlign: "center", 
							textTransform: "uppercase"
						}}
					>
						Contact me ...
					</Typography>
					<InputField 
						fullWidth={true} 
						label="Name" 
						variant="outlined" 
						inputProps={{ style: { color: "white" } }} 
						margin="dense"
					/>
					<InputField 
						fullWidth={true} 
						label="Email" 
						variant="outlined" 
						inputProps={{ style: { color: "white" } }} 
						margin="dense"
					/>
					<InputField 
						fullWidth={true} 
						label="Company" 
						variant="outlined" 
						inputProps={{ style: { color: "white" } }} 
						margin="dense"
					/>
					<Button 
						variant="outlined" 
						fullWidth={true} 
						endIcon={ <SendIcon/> } 
						className={classes.button}
					>
						Contact
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};

export default Contacts;