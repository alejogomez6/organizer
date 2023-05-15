import "./Equipo.css";
import { Card } from "../Card";
import hexToRgba from "hex-to-rgba";

export const Equipo = (props) => {
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const { colorPrimario, titulo } = props.datos;

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
        >
          <input
            type="color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value,titulo)}}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador) => (
              <Card
                datos={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
