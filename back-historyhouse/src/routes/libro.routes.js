import { Router } from "express";
import { pool } from '../config/db.js';
import { getLibros, getDescripcion, getDetalles, getTitulo, getCategorias, getResumen } from "../controllers/libro.controllers.js";

const router = Router();

// Ruta para obtener la lista de libros
router.get('/libros', getLibros);

// Ruta para obtener la descripción de un libro por ID
router.get('/libros/descripcion/:id_libro', getDescripcion);

// Ruta para obtener los detalles de un libro por ID
router.get('/libros/detalles/:id_libro', getDetalles);

// Ruta para obtener el titulo y la portada de un libro por ID
router.get('/libros/titulo/:id_libro', getTitulo);

// Ruta para obtener las categorias de un libro por ID
router.get('/libros/categorias/:id_libro', getCategorias);

// Ruta para obtener el resumen de un libro por ID
router.get('/libros/resumen/:id_libro', getResumen);
export default router;
