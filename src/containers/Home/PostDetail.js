import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getPost } from "../../services/post.service";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { updateAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateAppTitle("Post Details");
  });

  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {post.body}
          </Typography>
          
        </>
      ) : null}
    </div>
  );
};

export default PostDetail;
