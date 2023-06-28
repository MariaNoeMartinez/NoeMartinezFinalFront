import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let dentist= JSON.parse (localStorage.getItem ("odontologos"))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div  className="card-grid">
      {dentist.map (item=> (
        <Card name= {item.name} username={item.username} key= {item.id} id={item.id}/>
      ))}
        {/* este componente debe consumir los destacados del localStorage /}
        {/ Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;

