import { Box, Button, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import VideoPlayer from "../components/VideoPlayer";
import db from "../firebase";

function Video() {
  const params = useParams();
  const docRef = doc(db, "video", params.id || "");
  const [data, setData] = useState<DocumentData>();
  const [loading, setLoading] = useState(true);

  const fetchVideo = async () => {
    const doc = await getDoc(docRef);
    const data = doc.data();
    setData({ ...data });
  };

  const share = async () => data && (await navigator.share({ title: data.title, url: data.url }));

  useMemo(() => {
    fetchVideo().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ paddingY: 3, paddingX: 2 }}>
        {loading ? <Loader /> : null}
        {data && (
          <>
            <VideoPlayer
              src={{
                type: "video",
                title: data.title,
                sources: [
                  {
                    src: data.url,
                    type: "video/mp4",
                  },
                ],
                poster: data.thumbnail,
              }}
            />
            <Typography variant="h4" sx={{ marginBottom: 2.5 }}>
              {data.title}
            </Typography>
            <Button size="medium" variant="outlined" onClick={share} startIcon={<ShareIcon />}>
              Share
            </Button>
          </>
        )}
      </Box>
    </>
  );
}

export default Video;
