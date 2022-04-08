import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";
//Material UI
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from '@mui/material/FormLabel';
//react hook form
import { useForm } from "react-hook-form";
import useLoanApp from "../../hooks/useLoanApp";

const useStyles = makeStyles(theme => ({
	cardContent: {
		padding: '24px !important',
		[theme.breakpoints.down('sm')]: {
			padding: '15px 20px !important'
		},
		borderRadius: '7px !important',
	},
	textGrey: {
		color: grey[700]
	},
	formLabel: {
		fontWeight: '700 !important',
		color: 'grey[700] important',
		marginBottom: '1rem !important'
	}
}));

export default function LoanAppForm() {
	const classes = useStyles();

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const watchProduct = watch("product");

	const { loanProducts, loanPurposes, interestTypes, amountEnable, maxAmount } = useLoanApp(watchProduct);

	const onSubmit = (data) => {
		console.log(data)
	}

	const handleClickNext = (data) => {
		console.log(data)
	}

	return (
		<div>
			<Box mb={3}>
				<Paper elevation={0} className={classes.cardContent} variant="outlined">
					<Typography
						className={classes.textGrey}
						sx={{
							fontWeight: 700,
							fontSize: { xs: 20, sm: 22, md: 22, lg: 24 },
							marginBottom: { xs: 1, sm: 1.5, md: 1.5, lg: 2 }
						}}>
						Loan Application Form
					</Typography>
					<Typography
						className={classes.textGrey}
						sx={{
							fontWeight: 500,
							fontSize: { xs: 12, sm: 14, md: 14, lg: 16 }
						}}>
						Some information here.
					</Typography>
				</Paper>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
				<Box mb={2}>
					<Paper variant="outlined" className={classes.cardContent} sx={errors.product ? { borderColor: red[700] } : null}>
						<FormControl variant="standard" margin="dense" size="small" error={!!errors?.product} fullWidth >
							<FormLabel>
								<Typography className={classes.formLabel} sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Choose your loan product
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							{loanProducts &&
								<RadioGroup defaultValue={""} >
									{loanProducts.map((loanProduct) => (
										<FormControlLabel
											key={loanProduct.id}
											value={loanProduct.product_code}
											control={<Radio size="small" />}
											label={<Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>{loanProduct.product_name}</Typography>}
											{...register("product", { required: "Required!" })}
										/>
									))}
								</RadioGroup>
							}
							<FormHelperText>{errors.product ? errors.product.message : null}</FormHelperText>
						</FormControl>
					</Paper>
				</Box>
				<Box mb={2}>
					<Paper variant="outlined" className={classes.cardContent} sx={errors.purpose ? { borderColor: red[700] } : null}>
						<FormControl variant="standard" margin="dense" size="small" error={!!errors?.purpose} fullWidth >
							<FormLabel>
								<Typography className={classes.formLabel} sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Purpose of your loan
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							{loanPurposes &&
								<RadioGroup defaultValue={""} >
									{loanPurposes.map((loanPurpose) => (
										<FormControlLabel
											key={loanPurpose.id}
											value={loanPurpose.purpose}
											control={<Radio size="small" />}
											label={<Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>{loanPurpose.purpose}</Typography>}
											{...register("purpose", { required: "Required!" })}
										/>
									))}
								</RadioGroup>
							}
							<FormHelperText>{errors.purpose ? errors.purpose.message : null}</FormHelperText>
						</FormControl>
					</Paper>
				</Box>
				<Box mb={2}>
					<Paper variant="outlined" className={classes.cardContent} sx={errors.interestType ? { borderColor: red[700] } : null}>
						<FormControl variant="standard" margin="dense" size="small" error={!!errors?.interestType} fullWidth >
							<FormLabel>
								<Typography className={classes.formLabel} sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Choose interest type
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							{interestTypes &&
								<RadioGroup defaultValue={""} >
									{interestTypes.map((interestType) => (
										<FormControlLabel
											key={interestType.id}
											value={interestType.interest_type}
											control={<Radio size="small" />}
											label={<Typography sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>{interestType.interest_type}</Typography>}
											{...register("interestType", { required: "Required!" })}
										/>
									))}
								</RadioGroup>
							}
							<FormHelperText>{errors.interestType ? errors.interestType.message : null}</FormHelperText>
						</FormControl>
					</Paper>
				</Box>
				<Box mb={2}>
					<Paper variant="outlined" className={classes.cardContent} sx={errors.amount ? { borderColor: red[700] } : null}>
						<FormControl variant="standard" margin="dense" size="small" error={!!errors?.amount} fullWidth >
							<FormLabel>
								<Typography className={classes.formLabel} sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
									Loan amount
									<span style={{ color: red[700] }}> *</span>
								</Typography>
							</FormLabel>
							<TextField
								{...register("amount", {
									required: 'Please specify an amount!',
									min: {
										value: 3000,
										message: 'Minimum loan amount is 3,000!'
									},
									max: {
										value: watchProduct === 'LT' ? 5000000 : watchProduct === 'ST' ? 500000 : watchProduct === 'SL' ? 500000 : 0,
										message: 'Loan amount must not exceed ' + maxAmount
									}
								})}
								helperText={errors.product ? "Please choose a loan product" : errors.amount ? errors.amount.message : null}
								error={!!errors?.amount}
								placeholder="Enter amount..."
								variant="standard"
								margin="dense"
								type="number"
								sx={{ width: { xs: '100%', md: '50%' } }}
								InputProps={{
									readOnly: !amountEnable ? true : false,
									startAdornment: (
										<InputAdornment position='start'>
											<Typography sx={{ fontSize: 20 }}> &#8369;</Typography>
										</InputAdornment>
									),
								}}
							/>
						</FormControl>
					</Paper>
				</Box>
				<Button variant="contained" type="submit" sx={{ textTransform: 'none', borderRadius: '7px' }}>Submit</Button>
				&nbsp;&nbsp;
				<Button variant="contained" color="secondary" onClick={() => handleSubmit(handleClickNext())} sx={{ textTransform: 'none', borderRadius: '7px' }}>Next</Button>
			</form>
		</div >
	);
}