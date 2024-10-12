import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getBooks } from "../service/api";
import React from 'react';
import Grid from '@mui/material/Grid';

const Home = () => {

  
  const [books, setBooks] = useState([]);

  console.log("Estos son los libros",books)

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
  }

  return (
    <div>
      <h1>Selecciona un libro</h1>
      
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id_libro}>
            <div style={{ textAlign: 'center' }}>
              {/* Cambiar la URL a /Libro/:id al hacer clic */}
              <Link to={`/Libro/${book.id_libro}`}>
                <img
                  className="img"
                  src={book.portada_libro}
                  alt={book.titulo_libro}
                  height={'400px'}
                  width={'300px'}
                  style={{ cursor: 'pointer', display: 'block', margin: '0 auto' }}
                />
              </Link>
              <p>{book.titulo_libro}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
