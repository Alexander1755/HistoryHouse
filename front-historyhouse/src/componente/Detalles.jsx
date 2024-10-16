

const Detalles = ({ details, categorys }) => {
  const categorias = categorys.map(libro => libro.nombre_categoria).join(', ');

  const fecha_publicacion = new Date(`${details.fecha_publicacion}`);
  const anio = fecha_publicacion.getUTCFullYear();
  const mes = String(fecha_publicacion.getUTCMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const dia = String(fecha_publicacion.getUTCDate()).padStart(2, '0');

  const fecha_publicacion_formateada = `${dia}/${mes}/${anio}`;

  console.log('Fecha formateada', fecha_publicacion_formateada)

  return (
    <div className="contenedor-detalle">
      
        <div className="contenedor-title-detalles">
        <h1 >Detalles del libro</h1>
        </div>

        <div className="contenedor-de-detalles" >

          <div className="detalles-box">
            <h6>Autor:  {details.nombre_autor}</h6>
          </div>

          <div className="detalles-box">
            <h6>Editorial: {details.nombre_editorial}</h6>
          </div>

          <div className="detalles-box">
            <h6>Número de páginas: {details.numero_paginas}pg.</h6>
          </div>

          <div className="detalles-box">
            <h6>Fecha de publicación: {fecha_publicacion_formateada}</h6>
          </div>

          <div className="detalles-box">
            <h6>Categorias: {categorias}</h6>
          </div>

        </div>
      </div>
    
  )
}

export default Detalles
