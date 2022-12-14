import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../components/MenuNav"
import { AgendaForm } from "../pages/AgendaForm"
import { AgendaPage } from "../pages/AgendaPage"
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

      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </HashRouter>     
    </div>
  )
}
export default App
