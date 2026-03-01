import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // azul institucional
    },
    secondary: {
      main: "#2e7d32", // verde
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: "Segoe UI, Roboto, Arial",
  },
});

export default function Login({ onLogin }) {
  const [role, setRole] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin({ role, username, password });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1976d2, #2e7d32)",
        }}
      >
        <Container maxWidth="xs">
          <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
            <Typography
              variant="h5"
              align="center"
              color="primary"
              fontWeight={600}
              gutterBottom
            >
              Iniciar Sesión
            </Typography>

            <TextField
              label="Usuario"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              color="primary"
            />

            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="primary"
            />

            <Select
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              sx={{ mt: 2 }}
              color="secondary"
            >
              <MenuItem value="user">Usuario</MenuItem>
              <MenuItem value="admin">Administrador</MenuItem>
            </Select>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, py: 1.2 }}
              onClick={handleLogin}
              disabled={!username || !password}
            >
              Entrar
            </Button>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}