import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/users-service";

const User = () => {
  const [users, setUsers] = useState([]);
  const { updateAppTitle } = useAppContext();
  useEffect(() => {
    updateAppTitle("Users");
  }, []);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <div>
      <Typography
        component="h2"
        variant="h4"
        color="green"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "20px" }}
      >
        Users
      </Typography>
      {users.map((val) => (
        <Grid item style={{ marginBottom: "10px" }} key={val.id} xs={12}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Link to={`/user/${val.id}`}>
                <Typography gutterBottom variant="h5" component="h2">
                  {val.name}
                </Typography>
              </Link>
              <Typography>{val.email}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default User;
