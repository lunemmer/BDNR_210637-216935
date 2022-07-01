import React from "react";
import { func, bool } from "prop-types";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { COUNTRY_ENUM, LANGUAGE_ENUM } from "utils/constants";

const SignUpForm = ({ onSubmit, loading = false }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      birthDate: new Date(),
    },
  });

  return (
    <Box component="form" m={2}>
      <Stack spacing={3}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange } }) => (
            <TextField label="Name" variant="outlined" onChange={onChange} />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange } }) => (
            <TextField
              label="Last Name"
              variant="outlined"
              onChange={onChange}
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
                onChange={onChange}
                value={value}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          />
        </LocalizationProvider>

        <Controller
          defaultValue={COUNTRY_ENUM[0]}
          name="country"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              options={COUNTRY_ENUM}
              renderInput={(params) => (
                <TextField label="Country" variant="outlined" {...params} />
              )}
              onChange={(e, data) => onChange(data)}
              value={value}
            />
          )}
        />

        <Controller
          defaultValue={LANGUAGE_ENUM[0]}
          name="language"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              options={LANGUAGE_ENUM}
              renderInput={(params) => (
                <TextField label="Language" variant="outlined" {...params} />
              )}
              onChange={(e, data) => onChange(data)}
              value={value}
            />
          )}
        />

        <Box mt={2}>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Crear Usuario
          </LoadingButton>
        </Box>
      </Stack>
    </Box>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
  loading: bool,
};

export default SignUpForm;
