import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import BuscarNoticiaPagina from "./paginas/BuscarNoticiaPagina";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";



function App() {
  return (
    <>
      
      <main>
        
        <body className="cuerpo">
        <header className="cabecera">
          <Header/>
        </header>
        
        <BrowserRouter>
            <Routes>
                <Route path="/buscador" element={<BuscarNoticiaPagina/>} />
                <Route path="*" element={<div>pagina de error</div>} />
              </Routes>
        </BrowserRouter>
        <footer>
          <Footer/>
        </footer>
        </body>
        
        
      </main>
     
   </>
    
  );
}

export default App;
