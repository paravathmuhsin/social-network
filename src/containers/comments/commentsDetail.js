import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getComment } from "../../services/comment.service";

const CommentsDetail = () => {
  const [comments, setComments] = useState(null);
  const { updateAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateAppTitle("Comments Details");
  }, []);

  useEffect(() => {
    getComment(id).then((res) => {
      setComments(res);
    });
  }, [id]);

  return (
    <div>
      {comments ? (
        <>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {comments.name}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {comments.email}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {comments.body}
          </Typography>
        </>
      ) : null}
    </div>
  );
};

export default CommentsDetail;
