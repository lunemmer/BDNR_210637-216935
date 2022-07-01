import React from "react";
import { func, bool, object } from "prop-types";
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

const SignUpForm = ({ onSubmit, loading = false, defaultUser = {} }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      birthDate: defaultUser.profile?.birthDate || new Date(),
      password: defaultUser.password,
    },
  });

  return (
    <Box component="form" m={2}>
      <Stack spacing={3}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              onChange={onChange}
              value={value}
            />
          )}
          defaultValue={defaultUser?.email}
        />

        {!defaultUser?.password && (
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                onChange={onChange}
                value={value}
              />
            )}
            defaultValue={defaultUser?.password}
          />
        )}

        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="User Name"
              variant="outlined"
              onChange={onChange}
              value={value}
            />
          )}
          defaultValue={defaultUser?.profile?.username}
        />
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Name"
              variant="outlined"
              onChange={onChange}
              value={value}
            />
          )}
          defaultValue={defaultUser?.profile?.name}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Last Name"
              variant="outlined"
              onChange={onChange}
              value={value}
            />
          )}
          defaultValue={defaultUser?.profile?.lastName}
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
            defaultValue={defaultUser?.profile?.birthDate}
          />
        </LocalizationProvider>

        <Controller
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
          defaultValue={defaultUser?.profile?.country || COUNTRY_ENUM[0]}
        />

        <Controller
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
          defaultValue={defaultUser?.profile?.language || LANGUAGE_ENUM[0]}
        />

        <Box mt={2}>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            {defaultUser?.email ? "Edit User" : "Crear User"}
          </LoadingButton>
        </Box>
      </Stack>
    </Box>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
  defaultUser: object,
  loading: bool,
};

export default SignUpForm;
