import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Layouts/NavBar';
import Home from './Components/Pages/Home';
import Sobre from './Components/Pages/Sobre';
import Servicos from './Components/Pages/Servicos';
import Contactos from './Components/Pages/Contactos';
import Compra from "./Components/Pages/Compra"; // Página da loja
import FormularioCompra from "./Components/From/FormularioCompra";

import Conteiner from './Components/Layouts/Conteiner';
import Roudape from './Components/Layouts/Roudape';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Conteiner customClass="minHeight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/compra" element={<Compra />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/" element={<Compra />} />
            <Route path="/formulario-compra" element={<FormularioCompra />} />
          </Routes>
        </Conteiner>
        <Roudape/>
      </div>
    </Router>
  );
}

export default App;