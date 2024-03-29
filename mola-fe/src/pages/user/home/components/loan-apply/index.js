import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { grey, green } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Configs from "../../../../../utils/Configs";

import LoanSvg from "../../../../../assets/svg/undraw_online_payments_re_y8f2.svg";
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';


const useStyles = makeStyles(theme => ({

	cardApply: {
		background: '#fff',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%',
	},
	card: {
		background: 'linear-gradient(45deg, #2268a4 10%, #4994d8 90%)',
		borderRadius: '12px !important',
		minWidth: '300px',
		height: '100%'
	},
	title: {
		fontWeight: 'bold !important',
		color: grey[600]
	},
	link: {
		textDecoration: 'none !important'
	}

}));

export default function CardLoanApply({ savings }) {
	const classes = useStyles();
	const value = savings[0];
	const { userId } = Configs();

	return (
		<div>
			{savings &&
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6} >
						<Card className={classes.card} elevation={0}>
							<CardContent
								sx={{
									paddingX: { xs: '25px', sm: '25px', md: '30px' },
									paddingY: { xs: '20px', sm: '20px', md: '30px' },
									color: '#fff',
								}}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
										<Avatar
											sx={{
												bgcolor: '#fff',
												color: '#b9b9b9',
												width: { xs: 50, sm: 60, md: 60 },
												height: { xs: 50, sm: 60, md: 60 },
											}}>
											<SavingsRoundedIcon sx={{ fontSize: { xs: 30, sm: 35, md: 35 } }} />
										</Avatar>
										<Box ml={2}>
											<Typography
												sx={{
													fontSize: { xs: 16, sm: 16, md: 18, },
													fontWeight: 700,

												}}>
												{value.firstname + ' ' + value.middlename.charAt(0) + '. ' + value.lastname} {value.suffix ? value.suffix : ''}
											</Typography>
											<Typography
												sx={{
													fontSize: { xs: 14, sm: 14, md: 18, },
													color: grey[300],
												}}>
												Total Savings
											</Typography>
										</Box>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
										<Typography variant="overline">**** **** **2906</Typography>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<div>
											<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
												<Typography
													sx={{
														fontSize: { xs: 12, sm: 14, md: 16 }
													}}>
													Available Balance
												</Typography>
											</Box>

											<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
												<Typography sx={{ marginTop: '2px', fontWeight: 'bold' }}>PHP</Typography>
												<Typography
													sx={{
														marginLeft: 1,
														fontWeight: 'bold',
														fontSize: { xs: 21, sm: 21, md: 21 }
													}}>
													{value.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
												</Typography>
											</Box>
										</div>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Card className={classes.cardApply} elevation={0}>
							<CardContent sx={{
								paddingX: { xs: '25px', sm: '25px', md: '30px' },
								paddingY: { xs: '20px', sm: '20px', md: '30px' },
							}}>
								<Grid container>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<div>
											<Box mb={2}>
												<Typography
													sx={{
														fontSize: { xs: 16, sm: 16, md: 18 },
														fontWeight: 700,
														color: grey[600],
														marginBottom: 1
													}}>
													Apply for a loan
												</Typography>
												<Typography
													sx={{
														fontSize: { xs: 12, sm: 12, md: 14 },
														color: grey[600]
													}}>
													Submit a loan application without visiting the branch!
												</Typography>
											</Box>
											<Box>
												<Link to={`/loan_apply/${userId}`} className={classes.link}>
													<Button color="secondary" variant="contained" sx={{ borderRadius: '25px', boxShadow: 'none', minWidth: 140, }}>
														<Typography variant='overline'
															sx={{
																marginX: 2,
																marginY: -0.5,
																letterSpacing: 1,
																textTransform: 'none',
															}}>
															Get started
														</Typography>
													</Button>
												</Link>
											</Box>
										</div>
									</Grid>
									<Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
										<Box
											component="img"
											sx={{
												width: { xs: 160, sm: 180, md: 200 },
											}}
											alt="Memba Logo"
											src={LoanSvg}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			}
		</div>
	);
}