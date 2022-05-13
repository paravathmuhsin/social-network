import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getPhotos } from "../../services/photos.service";
import { Link } from "react-router-dom";
const Photos = () => {
  const [images, setImages] = useState([]);
  const { updateAppTitle } = useAppContext();
  useEffect(() => {
    updateAppTitle("Photos");
  }, []);

  useEffect(() => {
    getPhotos().then((res) => {
      const filterData = res.slice(0, 20);
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
          {/* <Card sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Link to={`/photos/${val.id}`}>
            <Typography>{val.id}</Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {val.title}
              </Typography>
              <Typography>{val.url}</Typography>
            </Link>
            
          </CardContent>
        </Card> */}
          <Box sx={{ width: 800, height: 450, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {images.map((item) => (
                <Link key={item.id} to={`/photos/${item.id}`}>
                  <ImageListItem>
                    <img
                      src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar position="below" title={item.title} />
                  </ImageListItem>
                </Link>
              ))}
            </ImageList>
          </Box>
        </Grid>
      ))}
    </div>
  );
};

export default Photos;
