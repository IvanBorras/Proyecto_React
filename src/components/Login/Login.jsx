// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ setUser }) {
//   const [authenticated, setAuthenticated] = useState()
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook para navegar programáticamente

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí puedes añadir la lógica para autenticar al usuario
//     // Por simplicidad, vamos a suponer que el login siempre es exitoso
//     setUser({ name: username });
//     navigate('/food'); // Navega a la ruta privada '/food' después de iniciar sesión
//   };

//   fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users')
//   .then((response) => response.json());
//   .then((data)=>{
//     const user = data.find((user)=> user.username === username && user.password === password);
//     if(user){
//       setAuthenticated(true);
//     }else{
//       alert('Nombre de usuario o contraseña incorrectos');
//     };
//     setUsername('')
//     setPassword('')
//   });

//   if (authenticated) {
//     return <Menu food={setFood} />;
//   } else {
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

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

    fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users')
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
      <h2>Login</h2>
        <form className='formLogin' onSubmit={handleSubmit}>
            <span className='containerLogin'>
              <span>
                <label>Username:</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </span>
                <span>
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </span>
            
            </span>
          <button type="submit">Login</button>
        </form>
      </span>
    );
  }
};

export default Login;
