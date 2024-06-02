import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodList from '../FoodList/FoodList';

function Login({ setUser }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
 //comprobando si el usuario existe
    fetch('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/users')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.username === username && user.password === password);
        if (user) {
          setAuthenticated(true);
          setUser({ name: username });
          navigate('/food'); // Navega a la ruta privada '/food' después de iniciar sesión
        } else {
          alert('Nombre de usuario o contraseña incorrectos');
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    // Limpia los campos del formulario
    setUsername('');
    setPassword('');
  };

  if (authenticated) {
    return <FoodList food={setFood} />;
  } else {

    return (
      <span>
      <h2 className='login-title'>Login</h2>
        <form className='formLogin' onSubmit={handleSubmit}>
            <span className='containerLogin'>
              <span>
                <label className='loginWords'>Username:</label>
                  <input className='loginInputs' type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </span>
                <span>
                  <label className='loginWords'>Password:</label>
                  <input className='loginInputs'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </span>
            
            </span>
          <button className='loginButton' type="submit">Login</button>
        </form>
      </span>
    );
  }
};

export default Login;
