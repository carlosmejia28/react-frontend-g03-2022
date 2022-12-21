import { useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../components/MenuNav"
import { ProtectedRoute } from "../components/ProtectedRoute"
import { AgendaCitasPage } from "../pages/AgendaCitasPage"
import { AgendaForm } from "../pages/AgendaForm"
import { AgendaPage } from "../pages/AgendaPage"
import { CitasAgendaPage } from "../pages/CitasAgendaPage"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { Landing } from "../pages/Landing"
import { NotFound } from "../pages/NotFound"
import { PacienteDetalle } from "../pages/PacienteDetalle"
import { PacienteForm } from "../pages/PacienteForm"
import { PacientePage } from "../pages/PacientesPage"

function App() {

  const [user, setUser] =useState(null);
  
  const login = () =>
  setUser({
    id:1,
    name:"carlos",
    permisos:["analizar"],
    roles:["admin"]
  });

  const logout = () => setUser(null);



  return (
    <div >
      <HashRouter>
        <MenuNav />
        {
          user ? (
            <button onClick={logout}>Logout</button>
          ):<button onClick={login} >Login</button>
        }

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/contacto" element={<ContactPage />} />          
          <Route path="/agenda-citas" element={<AgendaCitasPage />} />
          <Route path="/agenda/citas/:id" element={<CitasAgendaPage />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
          
          <Route path="/agenda/:id" element={<AgendaForm />} />
          <Route path="/agenda/form" element={<AgendaForm />} />          
          <Route path="/pacientes" element={<PacientePage />} />
          <Route path="/pacientes/registrar" element={<PacienteForm />} />
          <Route path="/pacientes/:id" element={<PacienteDetalle />} />
          </Route>

          <Route path="/agenda" element={<ProtectedRoute
            redirectTo="/"
            isAllowed={!!user && user.roles.includes("admin")}
          >
            <AgendaPage />
          </ProtectedRoute>} />
          
          
        </Routes>
      </HashRouter>
    </div>
  )
}
export default App
