import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const [infoDentista, setInfoDentista] = useState({})
 const params = useParams()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  async function handleFetch() {
    const response = await(
      (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      ).json())
      setInfoDentista(response)
    
  }

  useEffect(() => {
    handleFetch()
  }, [])


  return (
    <section>
      <h1>Detail Dentist</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{infoDentista.name}</td>
            <td>{infoDentista.email}</td>
            <td>{infoDentista.phone}</td>
            <td>{infoDentista.website}</td>
          </tr>
        </tbody>
      </table>
     
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </section>
  )
}

export default Detail