import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";
import { v4 as uuid } from "uuid";


const Formulario = (props) => {

  const [nombre,setNombre] = useState("")
  const [puesto,setPuesto] = useState("")
  const [foto,setFoto] = useState("")
  const [equipo,setEquipo] = useState("")
  const id = uuid();

  const {registrarColaborador} = props

  const ManejarEnvio = (e) => {
    e.preventDefault()
    let datos = {
      nombre,
      puesto,
      foto,
      equipo,
      id
    }
    registrarColaborador(datos)
    console.log(datos);
  }

  return (
    <section className="formulario">
      <form onSubmit={ManejarEnvio}>
        <h2>Rellena el formulario para agregar el colaborador</h2>
        <CampoTexto 
            label="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            setValor={setNombre}/>
        <CampoTexto 
            label="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto} 
            setValor={setPuesto}/>
        <CampoTexto 
            label="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            setValor={setFoto}/>
        <ListaOpciones 
            valor={equipo}
            setValor={setEquipo}
            equipos={props.equipos}
            />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
