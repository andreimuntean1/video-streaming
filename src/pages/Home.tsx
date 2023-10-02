import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import VideoCard from "../components/VideoCard";
import db from "../firebase";
import { collection, DocumentData, onSnapshot, query } from "firebase/firestore";
import Loader from "../components/Loader";

function Home() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<DocumentData[]>([]);

  useEffect(() => {
    onSnapshot(query(collection(db, "video")), (res) => {
      const preloadImage = (url: string) => {
        const img = new Image();
        img.src = url;
      };

      setVideos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      res.docs.forEach((doc) => preloadImage(doc.data().thumbnail));

      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      {loading ? <Loader /> : null}
      <Grid container spacing={4} padding={5}>
        {videos.map((video) => (
          <VideoCard key={video.id} title={video.title} imgSrc={video.thumbnail} url={`/${video.id}`} />
        ))}
      </Grid>
    </>
  );
}

export default Home;
