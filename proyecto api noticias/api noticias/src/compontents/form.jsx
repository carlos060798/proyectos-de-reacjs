import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material";
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
  return (
    <>
      <form>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
          >
            {CATEGORIAS.map((option) => (
              <MenuItem key={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
          <Box sx={{marginTop:2}}>
          <Button  fullWidth variant="contained" color="error">
            Buscar
          </Button>
          </Box>
      
        </FormControl>
      </form>
    </>
  );
}

export default Formulario;
