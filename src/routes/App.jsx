import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../components/MenuNav"
import { AgendaCitasPage } from "../pages/AgendaCitasPage"
import { AgendaForm } from "../pages/AgendaForm"
import { AgendaPage } from "../pages/AgendaPage"
import { CitasAgendaPage } from "../pages/CitasAgendaPage"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"

function App() {

  return (
    <div >
      <HashRouter>
     <MenuNav/> 
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contacto" element={<ContactPage/>}/>
      <Route path="/agenda" element={<AgendaPage/>}/> 
      <Route path="/agenda/:id" element={<AgendaForm/>}/>
      <Route path="/agenda/form" element={<AgendaForm/>}/>
      <Route path="/agenda-citas" element={<AgendaCitasPage/>}/>
      <Route path="/agenda/citas/:id" element={<CitasAgendaPage/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </HashRouter>     
    </div>
  )
}
export default App
