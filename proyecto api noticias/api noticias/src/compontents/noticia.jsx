import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
function Noticia({noticia}) {
    console.log(noticia);
    const {urlToImage,url,title,description,source} = noticia;

    return (<>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card sx={{ maxWidth: 345 }}>
                             
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {source.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={url} target='_blank'>Ver noticia</Button>
                </CardActions>
            </Card>
        </Grid>
    
    
    </>  );
}

export default Noticia;