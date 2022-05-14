import React from "react";
import { Typography } from "@mui/material";
//import { useAppContext } from "../../components/AppContext/AppContext";
// import { useDispatch } from "react-redux";
//import { GET_USER } from "../../store/types/login.types";







const Profile = () => {
  return (
    <div>
      <></><Typography
        component="h2"
        variant="h4"
        color="green"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "20px" }}
      >
        Profile Details: <br/>
      </Typography>
      <Typography
        component="h2"
        variant="h6"
        color="grey"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "20px" }}
      >
        Name: Arya <br/>
        Age: 55 <br/>
        Place: Kottakkal <br/>
        District: Malappuram<br/>

      </Typography>
    </div>
  )};
export default Profile;
