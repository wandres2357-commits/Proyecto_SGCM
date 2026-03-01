import { useState } from "react";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("user");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1976d2, #2e7d32)",
        fontFamily: "Segoe UI",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: 32,
          borderRadius: 10,
          width: 320,
          boxShadow: "0 6px 16px rgba(0,0,0,.2)",
        }}
      >
        <h2
          style={{
            color: "#1976d2",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Iniciar Sesión
        </h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 20,
            borderRadius: 4,
            border: "1px solid #2e7d32",
            color: "#2e7d32",
            outline: "none",
          }}
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
            color: "#ffffff",
            border: "none",
            borderRadius: 4,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background .3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#1565c0")}
          onMouseOut={(e) => (e.target.style.background = "#1976d2")}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}