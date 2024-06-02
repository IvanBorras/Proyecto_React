import { Link } from 'react-router-dom';

function NavBar({ setNav }) {
  return (
    <nav className='navBar'>

        <h1 className='title'>Inicia sesión o ¡Regístrate!</h1>


      <ul className='navButtons'>

        <button className='clickButton'><Link to="/login">Inicia sesión</Link></button>

        <button className='clickButton'><Link to="/register">Registro</Link></button>

      </ul>
    </nav>
  );
}

export default NavBar;


