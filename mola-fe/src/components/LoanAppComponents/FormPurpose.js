import React, { useState, useEffect } from "react";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Controller } from "react-hook-form";
import useStyles from "./useStyles";

export const FormPurpose = ({ control, name, label, loanPurposes }) => {
	const { classes } = useStyles();

	return (

		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
			}) => (
				<div>
					<FormLabel htmlFor="purpose">
						<Typography className={classes.formLabel} sx={{ fontSize: { xs: 12, sm: 12, md: 15 } }}>
							{label}
						</Typography>
					</FormLabel >
					<FormControl
						size="small"
						error={!!error}
						fullWidth >

						{loanPurposes &&
							<Select
								id="purpose"
								onChange={onChange}
								value={value}
								sx={{
									fontSize: { xs: 13, sm: 13, md: 16 }
								}}>
								{loanPurposes.map((loanPurpose) => (
									<MenuItem
										key={loanPurpose.id}
										value={loanPurpose.id}
										sx={{
											fontSize: { xs: 13, sm: 13, md: 16 }
										}}>
										{loanPurpose.purpose}
									</MenuItem>
								))}
							</Select>
						}
						<FormHelperText className={classes.formText} sx={{ fontSize: { xs: 11, sm: 11, md: 12 } }}>{error ? error.message : null}</FormHelperText>
					</FormControl>
				</div >
			)}
		/>
	)
}
