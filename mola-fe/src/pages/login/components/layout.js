import React from "react";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
//Material UI Components
import Box from '@mui/material/Box';
//SRC IMG
import LogoOlivia from '../../../assets/olivia_logos/oliviaSquare.png';
//Custom Components
import Footer from "./footer";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	page: {
		background: 'transparent', //'#4e73df'
		width: '100%',
		padding: '10px 0 20px',
		height: 'auto'
	},
	logo: {
		textAlign: 'center',
		padding: '30px 0 0px'
	}
}));

const LoginLayout = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.logo}>
				<Box
					mb={4}
					mt={4}
					component="img"
					sx={{
						width: 140,
					}}
					alt="Olivia Logo"
					src={LogoOlivia}
				/>
			</div>
			<div className={classes.page}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default LoginLayout;