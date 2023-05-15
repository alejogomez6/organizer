import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import MiOrg from "./components/MiOrg";
import { Equipo } from "./components/Equipo";
import { Footer } from "./components/Footer";


function App() {

  // Equipos
  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  // Ocultar formulario
  const [mostrarFormulario,actualizarMostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/alejogomez6.png",
    nombre:"Alejo Gomez",
    puesto:"Desarrollador",
    fav: false
  }])

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores,colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  // Cambiar color del equipo
  const actualizarColor = (color,titulo) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header/>
      {
        mostrarFormulario && <Formulario
         equipos={equipos.map( (equipos)=> equipos.titulo )}
          registrarColaborador={registrarColaborador}
         />
        }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo)=> <Equipo 
        datos={equipo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
