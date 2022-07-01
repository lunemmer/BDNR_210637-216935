import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import SignUpForm from "components/SignUpForm";
import useFetch from "utils/useFetch";
import DeleteUser from "components/DeleteUser";

const ProfilePage = () => {
  const { id } = useParams();
  const { loading, error, onFetch, data } = useFetch();

  useEffect(() => {
    onFetch({ uri: `/users/${id}`, method: "GET" });
  }, []);

  return (
    <>
      <Typography variant="h4" m={2}>
        User Profile: {data.user?._id}
      </Typography>

      {data.user && (
        <SignUpForm
          onSubmit={(d) => console.log(d)}
          loading={loading}
          defaultUser={data.user}
        />
      )}

      {error && (
        <Typography variant="p" m={2} color="error">
          {error}
        </Typography>
      )}

      {data.user && <DeleteUser userId={data.user._id} />}
    </>
  );
};

export default ProfilePage;
