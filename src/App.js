import React,{useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [resultadoBusqueda, setResultadoBusqueda] = useState('');
  const [imagenes, setimagenes] = useState([])

  useEffect(() => {
    const consultaApi = async () =>{
      if(resultadoBusqueda !== ''){
        const apiKey = "18552663-b8260dccce6a06635f94807f1"
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${resultadoBusqueda}`

        const resultado = await fetch(url);
        const imagen = await resultado.json();
        setimagenes(imagen.hits);
        console.log(imagen.hits);
      }
    }
    consultaApi();
  }, [resultadoBusqueda])
  

  return (
    <>
      <div className="container border border-dark p-2 mt-2">
        <h1 className='text-center'>Buscador de imagenes</h1>
        <Formulario resultado={setResultadoBusqueda}/>
      </div>
      
      <ListadoImagenes imagenes={imagenes}/>
    </>
  );
}

export default App;
