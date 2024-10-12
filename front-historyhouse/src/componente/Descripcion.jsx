import { useState, useEffect } from "react";
import { getDescripcion } from "../service/api";
import { useParams } from "react-router-dom";  // Importar useParams


const Descripcion = () => {
  // Obtener el id_libro desde la URL
  const { id_libro } = useParams();

  console.log('Función ejecutada');
  const [descripcion, setDescripcion] = useState([]);

  console.log("Este es el id_libro:", id_libro);
  console.log("Esta es la descripcion", descripcion);

  useEffect(() => {
    obtenerDescripcion(id_libro);  // Usar id_libro como parámetro
  }, [id_libro]);

  const obtenerDescripcion = async (bookId) => {
    try {
      const response = await getDescripcion(bookId);
      console.log(response.data)
      setDescripcion(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Asegúrate de que hay datos antes de intentar acceder a ellos
  const sinopsis = descripcion.length > 0 ? descripcion[0].sinopsis_libro : 'Cargando...';
  const objetivos = descripcion.length > 0 ? descripcion[0].objetivos_libro : 'Cargando...';

  return (
    <div className="container-Descripcion">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{ textAlign: 'center' }}>Descripción del libro</h2>
        <div className="container-fluid sip-obj-container">
          <div className="card-box">
            <h4 className="mb-0">Sinopsis</h4>
            <p>{sinopsis}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid sip-obj-container">
        <div className="card-box">
          <h4 className="mb-0">Objetivos</h4>
          <p>{objetivos}</p>
        </div>
      </div>
    </div>
  );
};

export default Descripcion
