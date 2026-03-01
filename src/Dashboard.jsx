export default function Dashboard({ role, onLogout }) {
  return (
    <div style={{ padding: 40, fontFamily: "Segoe UI" }}>
      <h1>Panel {role === "admin" ? "Administrador" : "Usuario"}</h1>

      {role === "admin" && (
        <ul>
          <li>Gestión de Usuarios</li>
          <li>Reportes</li>
          <li>Configuración</li>
        </ul>
      )}

      {role === "user" && (
        <ul>
          <li>Mis Solicitudes</li>
          <li>Seguimiento PQR</li>
        </ul>
      )}

      <button
        onClick={onLogout}
        style={{
          marginTop: 20,
          padding: 10,
          background: "#c62828",
          color: "#fff",
          border: "none",
          borderRadius: 4
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}