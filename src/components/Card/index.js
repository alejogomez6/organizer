import "./Card.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

export const Card = (props) => {

  const {nombre, puesto, foto, id, fav} = props.datos
  const {colorPrimario, eliminarColaborador, like} = props

  return <div className="card">
    <AiFillCloseCircle size={"25px"} className="card-eliminar" onClick={()=>eliminarColaborador(id)}/>
    <div className="card-encabezado" style={{backgroundColor: colorPrimario}}>
      <img src={foto} alt={nombre}></img>
    </div>
    <div className="card-info">
      <h4>{nombre}</h4>
      <h5>{puesto}</h5>
      {fav ?
       <AiFillHeart color="red" onClick={()=>like(id)}/> :
       <AiOutlineHeart color="red" onClick={()=>like(id)}/> }
    </div>
  </div>


}