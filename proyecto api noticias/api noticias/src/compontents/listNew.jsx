import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import useNoticias from "../hook/useNoticias";
import Noticia from "./noticia";

function ListNew() {
  const { noticias, totalPages,handlePage,page } = useNoticias();
  const totalnewforPage= Math.ceil(totalPages / 20);

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
      <Stack spacing={2}
      sx={{mt:5}}
       direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Pagination count={totalnewforPage} color="primary" onChange={handlePage} page={page} />

      </Stack>
    </>
  );
}

export default ListNew;
