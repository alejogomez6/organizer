import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejarCambio = (e)=> {
        props.setValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select required value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden> Seleccionar equipo </option>
            {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>

}

export default ListaOpciones