import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { COUNTRY_ENUM } from "utils/constants";

const SignUpForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box component="form" m={2}>
      <Stack spacing={3}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name="birthDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DesktopDatePicker
                label="Birth Date"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          />
        </LocalizationProvider>

        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              id="country-select-demo"
              style={{ width: 300 }}
              options={COUNTRY_ENUM}
              onChange={onChange}
              value={value}
              renderInput={(params) => (
                <TextField {...params} label="Choose a country" fullWidth />
              )}
            />
          )}
        />

        <Box mt={2}>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Crear Usuario
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignUpForm;
