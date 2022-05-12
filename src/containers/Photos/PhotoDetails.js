import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getPhoto } from "../../services/photos.service";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const PhotoDetails = () => {
  const [image, setImage] = useState(null);
  const { updateAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateAppTitle("Photo Details");
  }, []);

  useEffect(() => {
    getPhoto(id).then((res) => {
      setImage(res);
    });
  }, [id]);
  return (
    <div>
      {/* <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {image.map((item) => (
            <ImageListItem key={item.url}>
              <img
                src={`${item.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box> */}
      {image ? (
        <>
          <h2>{image.title}</h2>
          <img
            src={`${image.url}?w=248&fit=crop&auto=format`}
            srcSet={`${image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={image.title}
            loading="lazy"
          />
        </>
      ) : null}
    </div>
  );
};

export default PhotoDetails;
