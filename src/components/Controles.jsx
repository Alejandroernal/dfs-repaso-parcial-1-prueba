const Controles = ({ onCambiarUnidad, onCambiarClima, reset }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('nublado')}>Nublado</button>
            <button onClick={() => reset()}>Volver</button>
        </div>
    )
}

export default Controles