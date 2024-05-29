import { Link } from 'react-router-dom';

function NavBar({ setNav }) {
  return (
    <nav>
      <h1 className='Portada'>Inicia sesión o ¡Regístrate!</h1>
      <ul className='navButton'>
        <button><Link to="/login">Inicia sesión</Link></button>
        <button><Link to="/register">Registro</Link></button>
      </ul>
    </nav>
  );
}

export default NavBar;


