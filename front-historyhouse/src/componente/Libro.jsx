import { useState  } from "react"
import Descripcion from "./Descripcion";
import Detalles from "./Detalles";
import Resumen from "./Resumen";
import {useNavigate } from 'react-router-dom'

const Libro = () => {
  //detalles 
  // descripcion 
  // resumen  
  const navegacion = useNavigate();

  const [cambio, setCambio] = useState('DETALLES')

  const botones = () => {
    if (cambio === 'DETALLES') {
      return (
        <Detalles />
      );
    } else {
      if (cambio === 'DESCRIPCION') {
        return (
          <Descripcion />
        );
      } else {
        return (
          <Resumen />
        );
      }
    }
  }


  return (
    <>
      <div>

        <h1>hola  soy el libro </h1>
        <div className="container" >
          <div className='row'>
            <i className="bi bi-arrow-left" id="otro" onClick={() => navegacion(-1)}></i>
          </div>
        </div>
        <div className='container' style={{ backgroundColor: '#E8E0C8' }} >
          <div className='row'>
            <div className='col' style={{ marginBottom: '15px' }}>
              <button type="button" className="btn btn-dark" style={{ backgroundColor: '#297272' }} onClick={() => setCambio('DETALLES')} >Detalles</button>{' '}
              <button type="button" className="btn btn-dark" style={{ backgroundColor: '#297272' }} onClick={() => setCambio('DESCRIPCION')} >Descripcion</button>{' '}
              <button type="button" className="btn btn-dark" style={{ backgroundColor: '#297272' }} onClick={() => setCambio('RESUMEN')} >Resumen</button>{' '}
            </div>
          </div>
        </div>

      </div>
      {botones()}
    </>
  )
}

export default Libro
