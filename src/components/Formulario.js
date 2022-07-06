import React, {useState} from 'react'
import Error from './Error';

const Formulario = ({resultado}) => {

  const [error, setError] = useState(false);
  const [busqueda, setbusqueda] = useState("");

  const submitHandle = (e) =>{
    e.preventDefault();

    if(busqueda.trim() === ''){
      setError(true);
      return;
    }

    setError(false);
    resultado(busqueda);
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Busca una imagen, por ej. Computación" 
            onChange={e => setbusqueda(e.target.value)}/>

          <button className="btn btn-primary" type="submit" id="button-addon2">Buscar</button>
        </div>

        {error ? <Error mensaje={"El campo es obligatorio"}/> : null}
      </form>
    </>
  )
}

export default Formulario