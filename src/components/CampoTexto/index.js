import "./CampoTexto.css";

const CampoTexto = (props) => {

  const manejarCambio = (e)=> {
    props.setValor(e.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}>
      </input>
    </div>
  );
};

export default CampoTexto;
