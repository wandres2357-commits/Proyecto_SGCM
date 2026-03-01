import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";

function Root() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("public");

  if (page === "login") {
    return <Login onLogin={(role) => {
      setUser({ role });
      setPage("dashboard");
    }} />;
  }

  if (page === "dashboard" && user) {
    return <Dashboard role={user.role} onLogout={() => {
      setUser(null);
      setPage("public");
    }} />;
  }

  return (
    <>
      <App />
      <div style={{ position: "fixed", top: 20, right: 20 }}>
        <button
          onClick={() => setPage("login")}
          style={{
            padding: "10px 16px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 4
          }}
        >
          Iniciar sesión
        </button>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);