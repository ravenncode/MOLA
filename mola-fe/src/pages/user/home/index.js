import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
//Hooks
import Configs from '../../../utils/Configs';
import useFetchId from '../../../hooks/useFetchId';
//MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";

// Custom Home Components
import CardLoanApply from "./components/loan-apply/index";
import CardLoanStatus from "./components/loan-status/index";
import CardLoanSummary from "./components/loan-summary/index";
import CardLoanCompleted from "./components/loan-complete/index";
import SkeletonLoader from "../../../features/SkeletonLoader";
import useStyles from "../styles";

export default function Home() {
	const { classes } = useStyles();
	const { API, userId } = Configs();
	const { data: savings } = useFetchId(API + 'user/savings/', userId);
	const { data: inactives } = useFetchId(API + 'user/inactives/', userId);
	const { data: actives } = useFetchId(API + 'user/actives/', userId);
	const { data: completed } = useFetchId(API + 'user/completed/', userId);

	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.content}>
					{savings ?
						(
							<CardLoanApply savings={savings} />
						)
						:
						(
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={6}>
									<SkeletonLoader />
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<SkeletonLoader />
								</Grid>
							</Grid>
						)
					}
					<br />
					{/* Loan Status List */}
					<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
						<Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: '10px', sm: '20px' } }}>
							<Typography className={classes.title}
								sx={{
									fontSize: { xs: '14px', sm: '18px', md: '18px' }
								}}>
								Loan Requests
							</Typography>
						</Grid>
					</Grid>

					{inactives ?
						(
							<CardLoanStatus inactives={inactives} />
						)
						:
						(
							<SkeletonLoader />
						)
					}
					<br />
					{/* Loan Summary List */}
					<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
						<Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: '10px', sm: '20px' } }}>
							<Typography className={classes.title}
								sx={{
									fontSize: { xs: '14px', sm: '18px', md: '18px' }
								}}>
								Loan Summary
							</Typography>
						</Grid>
						<Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
							<Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', paddingLeft: 2, paddingRight: 1, paddingY: 1, borderRadius: 5 }}>
								<Typography
									sx={{
										fontSize: { xs: '12px', sm: '14px', md: '14px' }
									}}>
									Show all
								</Typography>
								<Switch
									size="small"
									checked={checked}
									onChange={handleChange}
								/>
							</Paper>
						</Grid>
					</Grid>

					{actives ?
						(
							<CardLoanSummary actives={actives} />
						)
						:
						(
							<SkeletonLoader />
						)
					}
					<br />

					{checked &&
						<div>
							<Grid container my="15px" sx={{ display: 'flex', alignItems: 'center', minWidth: '300px' }}>
								<Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: { xs: '10px', sm: '20px' } }}>
									<Typography className={classes.subTitle}
										sx={{
											fontSize: { xs: '12px', sm: '16px', md: '16px' },
										}}>
										Completed Loans
									</Typography>
								</Grid>
							</Grid>

							{completed ?
								(
									<CardLoanCompleted completed={completed} />
								)
								:
								(
									<SkeletonLoader />
								)
							}

						</div>
					}
					<br /><br />
				</div>
			</Container >
		</div >
	);
}