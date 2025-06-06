import { useState } from 'react'
import './App.css'
import Controles from './components/Controles';
import Display from './components/Display';


{/*Tarea 1: Arreglar el botón de cambiar unidad.

Tarea 2: Arreglar el display para que muestre correctamente el estado del tiempo.

Tarea 3: Arreglar el icono del estado del tiempo.

Tarea 4: Agregar un botón para reiniciar al estado inicial: 'Celsius' y 'Soleado'.
Notas

Se debe generar un commit por cada tarea realizada.
Se debe cargar el repositorio de GitHub en la tarea del campus.*/}

function App() {
  const [unidad, setUnidad] = useState('Celsius');
  //const [clima, setClima] = useState('Soleado') 

  const climaSoleado = {
    name: 'Soleado',
    icon: '☀️',
    descripcion: 'asdad'
  };

  const climaNublado = {
    name: 'Nublado',
    icon: '🌧️',
    descripcion: 'sdadd'
  };

  const [clima, setClima] = useState(climaSoleado);


  /*
  const [clima, setClima] = useState({
    name: 'Soleado',
    icon: '☀️'
  });

*/
  const cambiarUnidad = () => {
    //Forma 1 ->

    const u = unidad === 'Celsius' ? 'Fahrenheit' : 'Celsius';
    setUnidad(u);

    //forma 2 -> unidad === 'Celsius' ? setUnidad('Fahrenheit') : setUnidad('Celsius')

    /* Forma 3 ->
    switch (unidad) {
      case 'Celsius':
       return setUnidad('Fahrenheit');
      default:
       return setUnidad('Celsius');
    } 
    */

    /*{/* Forma 4 ->
       if (unidad==='Celsius')
         setUnidad('Fahrenheit')
       
       else 
         setUnidad('Celsius')
       
     }*/

  }


  const cambiarClima = (estado) => {
    if (estado === 'soleado') {
      setClima(climaSoleado);
    }
    else {
      setClima(climaNublado);
    }
  }

  const reset = () => {
    setClima(climaSoleado);

    setUnidad('Celsius')
  }

  return (
    <div className="container">
      <h1>Estado del tiempo</h1>
      {/* <button onClick={reset}>Volver</button> */}
      <Controles onCambiarUnidad={cambiarUnidad} onCambiarClima={cambiarClima} reset={reset}></Controles>
      <Display unidad={unidad} clima={clima}></Display>
    </div>
  )
}

export default App
