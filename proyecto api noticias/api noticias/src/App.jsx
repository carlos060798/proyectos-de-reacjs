import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./compontents/form";
import { NoticiasProvaider } from "./context/NoticiasProvaider";
import ListNew from "./compontents/listNew";
function App() {
  return (
    <>
      <NoticiasProvaider>
        <Container>
          <header>
            <Typography variant="h4" textAlign="center">
              API de Noticias
            </Typography>
          </header>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} lg={4}>
              <Formulario />
            </Grid>
            <Grid>
            <ListNew />

            </Grid>
          </Grid>
        </Container>
      </NoticiasProvaider>
    </>
  );
}

export default App;
