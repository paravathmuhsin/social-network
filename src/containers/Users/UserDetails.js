import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

import { getUser } from "../../services/users-service";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { updateAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateAppTitle("User Details");
  }, []);

  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
    });
  }, [id]);

  return (
    <div>
      {user ? (
        <>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            Username:{user.username}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            E-mail:{user.email}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            align="center"
            justifyContent="space-between"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            Address- Street:{user.address.street}Suite:{user.address.suite}
            City:{user.address.city} Zipcode:{user.address.zipcode}
          </Typography>
          <GoogleMap lat={user.address.geo.lat} lng={user.address.geo.lng} />
        </>
      ) : null}
    </div>
  );
};

export default UserDetails;
