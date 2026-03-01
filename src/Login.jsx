import { useState } from "react";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("user");

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4f6f8",
      fontFamily: "Segoe UI"
    }}>
      <div style={{
        background: "#fff",
        padding: 32,
        borderRadius: 8,
        width: 320,
        boxShadow: "0 4px 12px rgba(0,0,0,.15)"
      }}>
        <h2 style={{ color: "#1976d2", textAlign: "center" }}>
          Iniciar Sesión
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 16 }}
        >
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>

        <button
          onClick={() => onLogin(role)}
          style={{
            width: "100%",
            padding: 12,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}