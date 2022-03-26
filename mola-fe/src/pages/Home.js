import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Custom Components
import CardLoanStatus from "../components/CardLoanStatus";
import CardLoanSummary from "../components/CardLoanSummary";
import CardLoanApply from "../components/CardLoanApply";
import CardSavings from "../components/CardSavings"


const useStyles = makeStyles(theme => ({
	root: {
		background: '#F0F1F3',
		height: '100%',
	},
	content: {
		padding: '24px 16px',
		overflowX: 'auto',
		[theme.breakpoints.down('sm')]: {
			padding: '24px 0'
		}
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={6}>
							<CardSavings />
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<CardLoanApply />
						</Grid>
					</Grid>
					<br />

					{/* Loan Status List */}
					<CardLoanStatus />

					{/* Loan Summary List */}
					<CardLoanSummary />
				</div>
			</Container >
		</div >
	);
}