import React, { useState, useEffect } from "react";
import { red, grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";

import { Controller } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";
import useStyles from "./useStyles";

export const FormRadioProducts = ({ control, name, label }) => {
	const { classes } = useStyles();
	const { data: loanProducts } = useFetch('http://localhost:5000/loanApps/loan_products');

	return (
		// <Controller
		// 	name={name}
		// 	control={control}
		// 	render={({
		// 		field: { onChange, value },
		// 		fieldState: { error },
		// 	}) => (
		// 		<Paper
		// 			variant="outlined"
		// 			className={classes.cardContent}
		// 			sx={error ? { borderColor: red[700] } : null}>
		// 			<FormLabel>
		// 				<Typography
		// 					className={classes.formLabel}
		// 					sx={{ fontSize: { xs: '14px', sm: '16px', md: '16px', lg: '18px' } }}>
		// 					{label}
		// 					<span style={{ color: red[700] }}> *</span>
		// 				</Typography>
		// 			</FormLabel>
		// 			<FormControl
		// 				margin="dense"
		// 				size="small"
		// 				error={!!error}
		// 				fullWidth >

		// 				{loanProducts &&
		// 					<RadioGroup value={value}>
		// 						{loanProducts.map((loanProduct) => (
		// 							<FormControlLabel
		// 								onChange={onChange}
		// 								key={loanProduct.id}
		// 								value={loanProduct.product_code}
		// 								control={<Radio size="small" />}
		// 								label={
		// 									<Typography
		// 										sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '16px' } }}>
		// 										{loanProduct.product_name}
		// 									</Typography>}
		// 							/>
		// 						))}
		// 					</RadioGroup>
		// 				}
		// 				<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>

		// 			</FormControl>
		// 		</Paper>
		// 	)}
		// />

		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel>
						<Typography
							className={!error ? classes.formLabel : classes.formLabelError}
							sx={{
								fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '13px' },
							}}>
							{label}
							<span style={{ color: red[400] }}> *</span>
						</Typography>
					</FormLabel >
					<FormControl
						margin="dense"
						size="small"
						error={!!error}
						fullWidth >

						{loanProducts &&
							<Select
								onChange={onChange}
								value={value}
								displayEmpty
							>
								{/* <MenuItem value="">
									<em>...</em>
								</MenuItem> */}
								{loanProducts.map((loanProduct) => (
									<MenuItem
										key={loanProduct.id}
										value={loanProduct.product_code}>
										{loanProduct.product_name}
									</MenuItem>
								))}
							</Select>
						}
						<FormHelperText className={classes.formText}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div >
			)}
		/>
	)
}

