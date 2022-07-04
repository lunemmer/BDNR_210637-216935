import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "utils/useFetch";
import routesPaths from "routes/routesPaths";

const UsersPage = () => {
  const navigate = useNavigate();
  const { loading, error, data, onFetch } = useFetch();

  useEffect(() => {
    onFetch({
      url: `${process.env.REACT_APP_USERS_API_URL}/users`,
      method: "GET",
    });
  }, []);

  const onEdit = (id) => {
    navigate(routesPaths.profile.replace(":id", id));
  };

  return (
    <>
      <Typography variant="h4" m={2}>
        All Users
      </Typography>

      <TableContainer>
        <Table aria-label="users">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Birth Date</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Payment Methods</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.users?.map(({ email, profile, _id }) => (
              <TableRow key={email}>
                <TableCell component="th" scope="row">
                  {email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {profile.username || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {profile.name || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {profile.lastName || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {format(new Date(profile.birthDate), "MM/dd/yyyy") || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {profile.country || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {profile.language || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {profile.paymentMethods.join(", ") || "-"}
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton onClick={() => onEdit(_id)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && <CircularProgress color="primary" />}

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}
    </>
  );
};

export default UsersPage;
