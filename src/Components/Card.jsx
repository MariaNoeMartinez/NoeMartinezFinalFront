import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg"


const Card = ({ name, username, id }) => {
    const dentista={
        id,
        name,
        username
    }
    const addFav = ()=>{

      const dentistas = JSON.parse (localStorage.getItem("odontologos") || "[]" )
       
      const dentistaExistente= dentistas.find ((item) => item.id === dentista.id );
          
          if(dentistaExistente){
           alert (`error, ${dentista.name} ya se encuentra en tu lista de favoritos`)
           return;
          }
          

      dentistas.push(dentista)
      localStorage.setItem("odontologos", JSON.stringify(dentistas))
    // Aqui iria la logica para agregar la Card en el localStorage
  }
 console.log ("agregando un dentista" + dentista.id)
  return (
    <div className="card">
        <img className= "imagen" src={img} alt="imagenDoctor"/>
         <h2><Link to={`/${id}`}>{name}</Link></h2>
         <h3>{username}</h3>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Añadir a favoritos🌟</button>
    </div>
  );
};

export default Card;
