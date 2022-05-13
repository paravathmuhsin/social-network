import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getTodos } from "../../services/todos.service";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { updateAppTitle } = useAppContext();
  useEffect(() => {
    updateAppTitle("Todos");
  }, []);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
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
        Todos
      </Typography>
      {todos.map((val1) => (
        <Grid item style={{ marginBottom: "10px" }} key={val1.id} xs={12}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Link to={`/todos/${val1.id}`}>
                <Typography gutterBottom variant="h5" component="h2">
                  {val1.title}
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default Todos;
