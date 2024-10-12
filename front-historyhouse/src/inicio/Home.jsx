import { Link, useNavigate } from "react-router-dom"

import './Inicio.css'
import { useState, useEffect } from "react";
import { getBooks } from "../service/api";

const Home = () => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); 

  console.log("Estos son los libros", books)

  useEffect(() => {
    obtenerLibros();
  }, [])

  const obtenerLibros = async () => {
    try {
      const response = await getBooks();
      console.log(response.data)
      setBooks(response.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  //const irADetalles = (id) => {
    //navigate(`/Libro/${id}`);
  //};

  return (
    <div>  
      <div className="contenedor-conciertos">
        {
          books.map((book) => (
            <div className="card" key={book.id_libro} >
              <img className="img" src={book.portada_libro} height={'200px'} width={'150px'}></img>
              <div className="textos">
                <Link className='menu-link' to="/Libro/${id}"><p>{book.titulo_libro}</p></Link>
                // <button className='menu-link' onClick={() => irADetalles(book.id_libro)}>
              </div>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Home
