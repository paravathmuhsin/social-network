import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getTodo } from "../../services/todos.service";

const TodosDetail = () => {
  const [todos, setTodos] = useState(null);
  const { updateAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateAppTitle("Todos Details");
  }, []);

  useEffect(() => {
    getTodo(id).then((res) => {
      setTodos(res);
    });
  }, [id]);
  return (
    <div>
      {todos ? (
        <>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {todos.title}
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {todos.completed}
          </Typography>
        </>
      ) : (
        <Box sx={{ width: 300 }}>
          <Typography component="div" variant={"h3"}>
            <Skeleton animation="wave" />
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default TodosDetail;
