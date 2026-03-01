import { useState } from "react";

export default function App() {
  const [view, setView] = useState("inicio");
  const [role, setRole] = useState("usuario");
  const [openMenu, setOpenMenu] = useState(null);

  const MenuTitle = ({ label, menuKey }) => (
    <div
      onClick={() => setOpenMenu(openMenu === menuKey ? null : menuKey)}
      style={{
        padding: "12px 16px",
        fontWeight: "bold",
        cursor: "pointer",
        background: "#e3f2fd",
        color: "#1976d2",
        borderBottom: "1px solid #bbdefb"
      }}
    >
      {label}
    </div>
  );

  const MenuItem = ({ label, target }) => (
    <div
      onClick={() => setView(target)}
      style={{
        padding: "10px 28px",
        cursor: "pointer",
        background: view === target ? "#1976d2" : "#fff",
        color: view === target ? "#fff" : "#333",
        borderLeft: view === target ? "4px solid #2e7d32" : "4px solid transparent"
      }}
    >
      {label}
    </div>
  );

  const Card = ({ children }) => (
    <div
      style={{
        background: "#fff",
        padding: 28,
        borderRadius: 8,
        maxWidth: 900,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
      {children}
    </div>
  );

  const Input = (props) => (
    <input
      {...props}
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 14,
        borderRadius: 4,
        border: "1px solid #90caf9"
      }}
    />
  );

  const Button = ({ label }) => (
    <button
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: 4,
        background: "#2e7d32",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Segoe UI", background: "#f4f6f8" }}>
      {/* HEADER */}
      <header
        style={{
          background: "#1976d2",
          color: "#fff",
          padding: "16px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <strong>SGCM – Sistema de Gestión</strong>
        <div>
          Rol:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              marginLeft: 8,
              padding: 6,
              borderRadius: 4,
              border: "none"
            }}
          >
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
      </header>

      <div style={{ display: "flex" }}>
        {/* MENU */}
        <aside
          style={{
            width: 300,
            background: "#ffffff",
            borderRight: "1px solid #ddd",
            minHeight: "calc(100vh - 64px)"
          }}
        >
          <MenuItem label="Inicio" target="inicio" />

          <MenuTitle label="Nosotros" menuKey="nosotros" />
          {openMenu === "nosotros" && (
            <>
              <MenuItem label="¿Quiénes Somos?" target="quienes" />
              <MenuItem label="Historia" target="historia" />
              <MenuItem label="Misión" target="mision" />
              <MenuItem label="Visión" target="vision" />
              <MenuItem label="Política de Calidad" target="politica" />
            </>
          )}

          <MenuTitle label="Servicios" menuKey="servicios" />
          {openMenu === "servicios" && (
            <>
              <MenuItem label="Áreas de Trabajo" target="areas" />
              <MenuItem label="Calidad en el Servicio" target="calidad" />
            </>
          )}

          <MenuTitle label="Novedades" menuKey="novedades" />
          {openMenu === "novedades" && (
            <>
              <MenuItem label="Noticias" target="noticias" />
              <MenuItem label="Actualizaciones" target="actualizaciones" />
              <MenuItem label="Boletines" target="boletines" />
            </>
          )}

          <MenuTitle label="Soporte" menuKey="soporte" />
          {openMenu === "soporte" && (
            <>
              <MenuItem label="Ayuda" target="ayuda" />
              <MenuItem label="Preguntas Frecuentes" target="faq" />
              <MenuItem label="PQR" target="pqr" />
            </>
          )}

          <MenuItem label="Contáctenos" target="contacto" />

          {role === "admin" && (
            <>
              <MenuTitle label="Administración" menuKey="admin" />
              {openMenu === "admin" && (
                <>
                  <MenuItem label="Usuarios" target="usuarios" />
                  <MenuItem label="Reportes" target="reportes" />
                  <MenuItem label="Configuración" target="configuracion" />
                </>
              )}
            </>
          )}
        </aside>

        {/* CONTENIDO */}
        <main style={{ flex: 1, padding: 36 }}>
          {view === "inicio" && (
            <Card>
              <h2 style={{ color: "#1976d2" }}>Bienvenido al SGCM</h2>
              <p>
                Rol actual: <strong style={{ color: "#2e7d32" }}>{role}</strong>
              </p>
            </Card>
          )}

          {view === "contacto" && (
            <Card>
              <h2 style={{ color: "#1976d2" }}>Formulario de Contacto</h2>
              <Input placeholder="Nombre" />
              <Input placeholder="Correo" />
              <Input placeholder="Mensaje" />
              <Button label="Enviar" />
            </Card>
          )}

          {view === "pqr" && (
            <Card>
              <h2 style={{ color: "#1976d2" }}>PQR</h2>
              <Input placeholder="Asunto" />
              <Input placeholder="Descripción" />
              <Button label="Enviar" />
            </Card>
          )}

          {view === "configuracion" && role === "admin" && (
            <Card>
              <h2 style={{ color: "#1976d2" }}>Configuración del Sistema</h2>
              <Input defaultValue="SGCM" />
              <Input defaultValue="admin@sgcm.com" />
              <Button label="Guardar cambios" />
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}