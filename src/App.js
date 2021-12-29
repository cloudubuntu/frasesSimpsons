// import logo from './components/logo.png';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //peticion o request con js nativo
    setMostrarSpinner(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato[0]);
    setTimeout(()=>{
      setPersonaje(dato[0]);
      setMostrarSpinner(false);
    }, 1750)
    
  };
  //operador ternario (condicion logica)?(accion si es verdadero sin parentesis):(accion en caso de falso sin parentesis)

  const mostrarComponente=(mostrarSpinner)?<Spinner></Spinner>:<Cards personaje={personaje}></Cards>

  return (
    <div className=" py-5">
      {/* <img src={logo} alt="logo" /> */}
      <Logo className=""></Logo>
      {/* <Btn></Btn> */}
      <div className="my-5 text-center">
        <Button
          variant="warning"
          size=""
          type="submit"
          className="px-5"
          onClick={() => {
            consultarAPI();
          }}
        >
          Obtener Frase
        </Button>
      </div>
      {/* <Cards personaje={personaje}></Cards>
      <Spinner></Spinner> */}
      {/* llamo al state para mostrar el spinner o la cards */}
      {mostrarComponente}
    </div>
  );
}

export default App;
