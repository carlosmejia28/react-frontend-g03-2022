import { HashRouter, Route, Routes } from "react-router-dom"
import { BlogPage } from "./components/BlogPage"
import { ContactPage } from "./components/ContactPage"
import { HomePage } from "./components/HomePage"
import { MenuNav } from "./components/MenuNav"
import { NotFound } from "./components/NotFound"

function App() {

  return (
    <div >
      <HashRouter>
     <MenuNav/> 
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contacto" element={<ContactPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>      
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     </HashRouter>     
    </div>
  )
}

export default App
