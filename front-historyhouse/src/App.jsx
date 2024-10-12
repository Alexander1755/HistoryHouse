import { Routes, Route } from 'react-router-dom'

import Libro from './componente/Libro'
import Navbar from './inicio/Navbar'
import Home from './inicio/Home'
import Descripcion from './componente/Descripcion'



const App = () => {
  return (
    < >

      <Navbar></Navbar>
      <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Libro/:id_libro' element={<Descripcion />} />
          {/* <Route path='/libros/:id' element = {}></Route> */}
        </Routes>
      </div>


    </>
  )
}

export default App



