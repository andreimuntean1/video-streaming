import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

interface CardProps {
  title: string,
  imgSrc: string,
  url: string
}

function JWCard({title, imgSrc, url}:CardProps) {
  return (
    <Grid item xs={12} sm={8} md={6} lg={4} >
      <Card>
        <CardMedia component='img' height='200px' image={imgSrc} />
        <CardContent>
          <Typography variant='h4' component='div'>{title}</Typography>
        </CardContent>
        <CardActions sx={{padding: 2}}>
          <Link to={url} style={{ color: 'white', textDecoration: 'none' }}>
            <Button size='medium' variant='contained'>Vizionează</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JWCard;