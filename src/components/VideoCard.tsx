import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  imgSrc: string;
  url: string;
}

function VideoCard({ title, imgSrc, url }: CardProps) {
  const [loading, setLoading] = useState(true);

  const share = async () => await navigator.share({ title, url });

  return (
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Card>
        <CardMedia>
          {loading && <Skeleton animation="pulse" variant="rectangular" sx={{ width: "100%", height: "auto", aspectRatio: "16 / 9" }} />}
          <img src={imgSrc} alt={title} onLoad={() => setLoading(false)} style={{ display: loading ? "none" : "block" }} height="auto" width="100%" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2, gap: 2, display: "flex", flexWrap: "wrap" }}>
          <Link to={url} style={{ color: "white", textDecoration: "none" }}>
            <Button size="medium" variant="contained" startIcon={<PlayArrowIcon />}>
              Watch
            </Button>
          </Link>
          <Button size="medium" variant="outlined" onClick={share} startIcon={<ShareIcon />}>
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default VideoCard;
