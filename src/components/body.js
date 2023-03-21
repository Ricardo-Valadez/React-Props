import React from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

function Body(props){
  const miFuncion=()=>{
    return alert("Hola mundo desde el Botón")
  }
  return(
        <div className="Body">
          <p>{props.practica}</p>
          {
            <ol>{
            props.temas.map((t,i)=>
              <li key={i}>{t}</li>
            )
            }</ol>
          }
          <button onClick={miFuncion} type="button" class="btn btn-secondary">Botón</button>
        </div>
      )
}

export default Body;

Body.propTypes={
  practica:PropTypes.string.isRequired,
  temas:PropTypes.array,
}

Body.defaultProps={
  practica:"Hola mundo"
}