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
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 6,
        maxWidth: 600
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
        padding: 8,
        marginBottom: 10
      }}
    />
  );

  const Button = ({ label, variant = "primary" }) => (
    <button
      style={{
        padding: "10px 16px",
        marginRight: 8,
        border: "none",
        borderRadius: 4,
        cursor: "pointer",
        background: variant === "primary" ? "#2e7d32" : "#ccc",
        color: variant === "primary" ? "#fff" : "#000"
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "Arial" }}>
      {/* HEADER */}
      <header
        style={{
          background: "#1976d2",
          color: "#fff",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <strong>SGCM – Sistema de Gestión de Citas Médicas</strong>
        <span>Superusuario</span>
      </header>

      {/* LAYOUT */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* MENU */}
        <aside style={{ width: 220, background: "#fff", borderRight: "1px solid #ddd" }}>
          <MenuButton label="Inicio" target="inicio" />
          <MenuButton label="Médicos" target="medicos" />
          <MenuButton label="Pacientes" target="pacientes" />
          <MenuButton label="Citas" target="citas" />
          <MenuButton label="Historial médico" target="historial" />
          <MenuButton label="Reportes" target="reportes" />
          <MenuButton label="Configuración" target="configuracion" />
          <MenuButton label="Salir" target="salir" />
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, padding: 24, background: "#f4f6f8" }}>
          {view === "inicio" && (
            <>
              <h2>Bienvenido al SGCM</h2>
              <p>Seleccione una opción del menú para comenzar.</p>
            </>
          )}

          {view === "medicos" && (
            <Card>
              <h2>Registrar Médico</h2>
              <Input placeholder="Nombres" />
              <Input placeholder="Apellidos" />
              <Input placeholder="Especialidad" />
              <Input placeholder="Correo electrónico" />
              <Button label="Guardar" />
            </Card>
          )}

          {view === "pacientes" && (
            <Card>
              <h2>Registrar Paciente</h2>
              <Input placeholder="Nombres" />
              <Input placeholder="Apellidos" />
              <Input type="date" />
              <Input placeholder="Correo electrónico" />
              <Button label="Guardar" />
            </Card>
          )}

          {view === "citas" && (
            <>
              <h2>Citas Médicas</h2>
              <table width="100%" style={{ borderCollapse: "collapse", background: "#fff" }}>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Paciente</th>
                    <th>Médico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25/04/2025</td>
                    <td>09:00</td>
                    <td>Ana López</td>
                    <td>Dr. Martínez</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {view === "historial" && (
            <>
              <h2>Historial Médico</h2>
              <Card>
                <p><strong>Paciente:</strong> Ana López</p>
                <p><strong>Diagnóstico:</strong> Hipertensión</p>
                <p><strong>Tratamiento:</strong> Control mensual</p>
              </Card>
            </>
          )}

          {view === "reportes" && (
            <>
              <h2>Reportes</h2>
              <Card>
                <p>Reporte de citas por médico</p>
                <p>Reporte de citas por fecha</p>
                <Button label="Generar reporte" />
              </Card>
            </>
          )}

          {view === "configuracion" && (
            <>
              <h2>Configuración</h2>
              <Card>
                <Input defaultValue="SGCM" />
                <Input defaultValue="admin@sgcm.com" />
                <Button label="Guardar cambios" />
              </Card>
            </>
          )}

          {view === "salir" && (
            <>
              <h2>Sesión finalizada</h2>
              <p>Gracias por usar el sistema SGCM.</p>
            </>
          )}
        </main>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: 12, fontSize: 13, color: "#555" }}>
        Sistema de Gestión de Citas Médicas © 2026
      </footer>
    </div>
  );
}