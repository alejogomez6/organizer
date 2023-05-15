import "./Boton.css"

const Boton = (props) => {
    return <button className="crear-button">
                {props.children}
            </button>
}

export default Boton