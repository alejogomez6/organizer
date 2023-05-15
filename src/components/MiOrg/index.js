import "./MiOrg.css"

const MiOrg = (props)=> {
    const {cambiarMostrar} = props;

    return <section className="org-section">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="org" onClick={cambiarMostrar}/>
    </section>;
}

export default MiOrg