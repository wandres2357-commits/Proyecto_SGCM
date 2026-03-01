import { useState } from "react";

export default function App() {
  const [view, setView] = useState("inicio");

  const MenuButton = ({ label, target }) => (
    <button
      onClick={() => setView(target)}
      style={{
        width: "100%",
        padding: "12px 16px",
        textAlign: "left",
        border: "none",
        cursor: "pointer",
        background: view === target ? "#1976d2" : "transparent",
        color: view === target ? "#fff" : "#333"
      }}
    >
      {label}
    </button>
  );

  const Card = ({ children }) => (
    <div style={{ background: "#fff", padding: 20, borderRadius: 6, maxWidth: 700 }}>
      {children}
    </div>
  );

  const Input = (props) => (
    <input {...props} style={{ width: "100%", padding: 8, marginBottom: 10 }} />
  );

  const Button = ({ label }) => (
    <button
      style={{
        padding: "10px 16px",
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        background: "#2e7d32",
        color: "#fff"
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "Arial" }}>
      {/* HEADER */}
      <header style={{ background: "#1976d2", color: "#fff", padding: "12px 20px" }}>
        <strong>SGCM – Sistema de Gestión</strong>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* MENU */}
        <aside style={{ width: 260, background: "#fff", borderRight: "1px solid #ddd" }}>
          <MenuButton label="Inicio" target="inicio" />
          <MenuButton label="Inicio de Sesión" target="login" />

          <MenuButton label="¿Quiénes Somos?" target="quienes" />
          <MenuButton label="Historia" target="historia" />
          <MenuButton label="Misión" target="mision" />
          <MenuButton label="Visión" target="vision" />
          <MenuButton label="Política de Calidad" target="politica" />
          <MenuButton label="Información Institucional" target="info" />

          <MenuButton label="Áreas de Trabajo" target="areas" />
          <MenuButton label="Calidad en el Servicio" target="calidad" />

          <MenuButton label="Novedades" target="novedades" />
          <MenuButton label="Noticias" target="noticias" />
          <MenuButton label="Actualizaciones" target="actualizaciones" />
          <MenuButton label="Boletines" target="boletines" />

          <MenuButton label="Soporte / Ayuda" target="ayuda" />
          <MenuButton label="Preguntas Frecuentes" target="faq" />
          <MenuButton label="PQR" target="pqr" />

          <MenuButton label="Contáctenos" target="contacto" />
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, padding: 24, background: "#f4f6f8" }}>
          {view === "inicio" && (
            <>
              <h2>Bienvenido</h2>
              <p>Sistema institucional SGCM.</p>
            </>
          )}

          {view === "login" && (
            <Card>
              <h2>Inicio de Sesión</h2>
              <Input placeholder="Usuario" />
              <Input type="password" placeholder="Contraseña" />
              <Button label="Ingresar" />
            </Card>
          )}

          {view === "quienes" && <Card><h2>¿Quiénes Somos?</h2><p>Descripción institucional.</p></Card>}
          {view === "historia" && <Card><h2>Historia</h2><p>Nuestra trayectoria.</p></Card>}
          {view === "mision" && <Card><h2>Misión</h2><p>Nuestra razón de ser.</p></Card>}
          {view === "vision" && <Card><h2>Visión</h2><p>Nuestro futuro.</p></Card>}
          {view === "politica" && <Card><h2>Política de Calidad</h2><p>Compromiso con la calidad.</p></Card>}
          {view === "info" && <Card><h2>Información Institucional</h2><p>Datos legales y administrativos.</p></Card>}

          {view === "areas" && <Card><h2>Áreas de Trabajo</h2><p>Departamentos y funciones.</p></Card>}
          {view === "calidad" && <Card><h2>Calidad en el Servicio</h2><p>Indicadores y procesos.</p></Card>}

          {view === "novedades" && <Card><h2>Novedades</h2><p>Últimos cambios.</p></Card>}
          {view === "noticias" && <Card><h2>Noticias</h2><p>Comunicados oficiales.</p></Card>}
          {view === "actualizaciones" && <Card><h2>Actualizaciones</h2><p>Mejoras del sistema.</p></Card>}
          {view === "boletines" && <Card><h2>Boletines</h2><p>Publicaciones periódicas.</p></Card>}

          {view === "ayuda" && <Card><h2>Soporte / Ayuda</h2><p>¿Necesitas asistencia?</p></Card>}
          {view === "faq" && <Card><h2>Preguntas Frecuentes</h2><p>Dudas comunes.</p></Card>}

          {view === "pqr" && (
            <Card>
              <h2>PQR</h2>
              <Input placeholder="Nombre" />
              <Input placeholder="Correo" />
              <Input placeholder="Petición / Queja / Reclamo" />
              <Button label="Enviar" />
            </Card>
          )}

          {view === "contacto" && (
            <Card>
              <h2>Formulario de Contacto</h2>
              <Input placeholder="Nombre" />
              <Input placeholder="Correo" />
              <Input placeholder="Mensaje" />
              <Button label="Enviar" />
            </Card>
          )}
        </main>
      </div>

      <footer style={{ textAlign: "center", padding: 12, fontSize: 13 }}>
        © 2026 SGCM
      </footer>
    </div>
  );
}