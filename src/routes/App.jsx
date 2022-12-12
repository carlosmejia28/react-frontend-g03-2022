import { HashRouter, Route, Routes } from "react-router-dom"
import { MenuNav } from "../components/MenuNav"
import { AgendaDetalle } from "../pages/AgendaDetalle"
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
      <Route path="/agenda/:id" element={<AgendaDetalle/>}/> 
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </HashRouter>     
    </div>
  )
}
export default App
