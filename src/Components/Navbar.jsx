import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
   const{tema, handleTheme}= useContext(ContextGlobal)
  return (
    <nav classname="nav">
      <Link></Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/favs"}>Favorite</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick= {handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar