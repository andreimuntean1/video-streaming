import { Box, Typography } from "@mui/material";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import VideoPlayer from "../components/VideoPlayer";
import db from "../firebase";

function Video() {
  const params = useParams()
  const docRef = doc(db, 'videos', params.id || '')
  const [data, setData] = useState<DocumentData>()
  const [loading, setLoading] = useState(true)

  const fetchVideo = async () => {
    const doc = await getDoc(docRef)
    setData(doc.data())
  }

  useMemo(() => {
    fetchVideo().then(() => {
      setLoading(false)
    })
  }, [])
  

  return (
    <>
      <Header />
      <Box sx={{paddingY: 3, paddingX: 2}}>
        {loading ? <Loader /> : null}
        <VideoPlayer src={{
          type: 'video',
          title: data?.title,
          sources: [{
            src: data?.url,
            type: 'video/mp4',
          }],
          poster: data?.thumbnail
        }} />
        <Typography variant="h4">{data?.title}</Typography>
      </Box>
    </>
  );
}

export default Video;