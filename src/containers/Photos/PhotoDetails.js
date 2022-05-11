
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getPhoto } from "../../services/post.service";
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

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
     <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
  {image.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={item.thumbnailUrl}
        
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </div>
  )
}

export default PhotoDetails
