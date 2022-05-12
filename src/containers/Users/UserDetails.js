import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";

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
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {user.email}
          </Typography>
        </>
      ) : null}
    </div>
  );
};

export default UserDetails;