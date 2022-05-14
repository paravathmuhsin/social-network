import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppContext } from "../../components/AppContext/AppContext";

const Profile = () => {
  const loggedUser = useSelector((state) => state.login.loggedUser);
  const { updateAppTitle } = useAppContext();
  useEffect(() => {
    updateAppTitle("Profile");
  }, []);
  return (
    <>
      <Typography
        component="h2"
        variant="h4"
        color="green"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "20px" }}
      >
        Profile Details: <br />
      </Typography>
      <Typography
        component="h2"
        variant="h6"
        color="grey"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "20px" }}
      >
        Name: {loggedUser.name} <br />
        Age: {loggedUser.age} <br />
        Place: {loggedUser.address.place} <br />
        District: {loggedUser.address.district}
        <br />
      </Typography>
    </>
  );
};
export default Profile;
