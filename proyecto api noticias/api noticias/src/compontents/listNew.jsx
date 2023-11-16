import { Grid, Typography } from "@mui/material";
import useNoticias from "../hook/useNoticias";
import Noticia from "./noticia";

function ListNew() {
  const { noticias } = useNoticias();
  return (
    <>
      <Typography textAlign={"center"} marginY={5} variant="h3" component="h2">
        ultimas noticias
      </Typography>

      <Grid container spacing={2}>
        {noticias.map((noticia) => {
          return <Noticia key={noticia.url} noticia={noticia} />;
        })}
      </Grid>
    </>
  );
}

export default ListNew;
