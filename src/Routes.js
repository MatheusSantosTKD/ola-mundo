import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrado from "paginas/NaoEncontrado";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/Sobremim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      
      <Routes>        
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post/>} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
