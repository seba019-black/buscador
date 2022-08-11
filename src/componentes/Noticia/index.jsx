import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {DateTime} from "luxon";

const Noticia = ({title,urlToImage,description,publishedAt,url,author}) => {
  const myDateTime= DateTime.fromISO(publishedAt);
  const fechaPublicacion = myDateTime.toFormat("dd-MM-yyyy");
  const horaPublicacion= myDateTime.toFormat("HH:mm");

    return (
         <Card md={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={urlToImage}
        alt="green iguana"
        position="relative"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Publicado el  {fechaPublicacion} a las  {horaPublicacion}</Button>
        <Button size="small" onClick={() => { window.open(url, '_blank'); }}>Ver mas</Button>
      </CardActions>
      <Typography gutterBottom variant="h7" component="div" >
          {author}
        </Typography>
    </Card>
    )
}

export default Noticia;