import React,{useState,useEffect} from 'react'
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getPhotos } from "../../services/post.service";
import { Link } from "react-router-dom";
const Photos = () => {

  const [images, setImages] = useState([]);
  const { updateAppTitle } = useAppContext();
  useEffect(() => {
    updateAppTitle("Photos");
  }, [updateAppTitle]);

  useEffect(() => {
    getPhotos().then((res) => {
      const filterData = res.filter(x => x.id<=20);
        setImages(filterData); 
      
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
      Photos
    </Typography>
    {images.map((val) => (
      <Grid item style={{ marginBottom: "10px" }} key={val.id} xs={12}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Link to={`/photos/${val.id}`}>
            <Typography>{val.id}</Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {val.title}
              </Typography>
            </Link>
            <Typography>{val.url}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </div>
  )
}

export default Photos
