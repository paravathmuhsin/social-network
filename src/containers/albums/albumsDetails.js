import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { getAlbum } from "../../services/album.service";

const AlbumsDetails = () => {
  const [albums, setAlbums] = useState(null);
  const { updateAppTitle } = useAppContext();
  const { id } = useParams();
  useEffect(() => {
    updateAppTitle("Albums Details");
  }, []);

  useEffect(() => {
    getAlbum(id).then((res) => {
      setAlbums(res);
    });
  }, [id]);

  return (
    <div>
      {albums ? (
        <>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            sx={{ flexGrow: 1 }}
            style={{ marginBottom: "20px" }}
          >
            {albums.title}
          </Typography>
        </>
      ) : null}
    </div>
  );
};

export default AlbumsDetails;
