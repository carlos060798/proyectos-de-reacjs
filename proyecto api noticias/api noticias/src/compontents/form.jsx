import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import useNoticias from "../hook/useNoticias";
import ListNew from "./listNew";
const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
function Formulario() {
  const { categoria, handleCategoria } = useNoticias();
  console.log(categoria);

  return (
    <>
      <form>
        <FormControl fullWidth>
          <InputLabel>Categoría</InputLabel>
          <Select
            label="Categoría"
            onChange={handleCategoria}
            value={categoria}
          >
            {CATEGORIAS.map((categoria) => (
              <MenuItem key={categoria.value} value={categoria.value}>
                {categoria.label}
              </MenuItem>
            ))}
          </Select>
          <Box sx={{ marginTop: 2 }}>
            <Button fullWidth variant="contained" color="error">
              Buscar
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
}

export default Formulario;
