import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getComments } from "../../services/comment.service";

const Comments = () => {
  const [posts, setPosts] = useState([]);
  const { updateAppTitle } = useAppContext();
  useEffect(() => {
    updateAppTitle("Comments");
  }, []);

  useEffect(() => {
    getComments().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div>
      <Typography
        component="h2"
        variant="h4"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "20px" }}
      >
        Comments
      </Typography>
      {posts.map((val) => (
        <Grid item style={{ marginBottom: "10px" }} key={val.id} xs={12}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Link to={`/comments/${val.id}`}>
                <Typography gutterBottom variant="h5" component="h2">
                  {val.name}
                </Typography>
              </Link>
              <Typography>{val.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default Comments;
