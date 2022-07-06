import React from 'react'
import Imagen from './Imagen'

const ListadoImagenes = ({imagenes}) => {
  return (
    <>
      <div className="album py-5 bg-light">
      <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {imagenes.map( imagen => (
          <Imagen 
            key={imagen.id}
            imagen={imagen}/>
        ))}
      </div>
    </div>
  </div>
    </>
  )
}

export default ListadoImagenes