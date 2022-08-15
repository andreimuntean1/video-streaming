import { Box } from "@mui/material";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

interface VideoPlayerProps { src: Plyr.SourceInfo }

function VideoPlayer({src}:VideoPlayerProps) {
  return (
    <Box sx={{marginBottom: 3, maxWidth: 800}}>
      <Plyr source={src} /> 
    </Box>
  );
}

export default VideoPlayer;