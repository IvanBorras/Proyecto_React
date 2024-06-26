import React, { useState } from 'react';

const FormRegister = () => {
  // variables de estado
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");

  //EVENTOS

  const handleChangeName = (ev) => {
    setName(ev.target.value);
  };

  const handleChangeEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleChangeUsername = (ev) => {
    setUsername(ev.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Verificar si el email ya está registrado
    fetch('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/users')
      .then(response => response.json())
      .then(users => {
        const userExists = users.some(user => user.email === email);

        if (userExists) {
          setErrorMessage('El email ya está registrado. Por favor, usa otro email.');
        } else {
          setErrorMessage('Registro exitoso');
          // Construir el objeto de usuario a enviar al mock API
          const newUser = {
            username: username,
            name: name,
            email: email,
            password: password
          };

          // Enviar Usuario a mock API
          fetch('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          .then(response => {
            // Manejar la respuesta del mock API
            console.log(response);
            // Limpiar los campos después de enviar el formulario
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setErrorMessage(''); // Limpiar el mensaje de error si el registro es exitoso
          })
          .catch(error => {
            // Manejar errores de la solicitud
            console.error('Error:', error);
          });
        }
      })
      .catch(error => {
        console.error('Error al verificar el email:', error);
        setErrorMessage('Hubo un error al verificar el email. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <span className='mainRegister'>
        <h2 className='register-title'>Registro</h2>
      <form className='formRegister' onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
        <span className='containerRegister'>
          <span>
            <label className='registerWords'>Name</label>
            <input className='registerInputs' placeholder='Nombre...' type="text" value={name} onChange={handleChangeName} required />
          </span>
          <span>
            <label className='registerWords'>Username</label>
            <input className='registerInputs' placeholder='Usuario...' type="text" value={username} onChange={handleChangeUsername} required />
          </span>
          <span>
            <label className='registerWords'>Email</label>
            <input  className="registerInputs" placeholder='Email...' type="email" value={email} onChange={handleChangeEmail} required />
          </span>
          <span>
            <label className='registerWords'>Password</label>
            <input className='registerInputs' placeholder='Contraseña...' type="password" value={password} onChange={handleChangePassword} required />
          </span>
        </span>
        <button className='registerButton' type="submit">Registrar</button>
      </form>
    </span>
  );
};

export default FormRegister;
































// import React, { useState } from 'react';

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [errorMessage, setErrorMessage] = useState("")
//   const [formData, setFormData] = useState({
//     nombre: '',
//     apellidos: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí puedes añadir la lógica para registrar al usuario
//     console.log('Form Data:', formData);
//   };
// // Verificar si el email ya está registrado
// fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users')
// .then(response => response.json())
// .then(users => {
//   const userExists = users.some(user => user.email === email);

//   if (userExists) {
//     setErrorMessage('El email ya está registrado. Por favor, usa otro email.');
//   } else {
//     setErrorMessage('Registro exitoso');
//     // Construir el objeto de usuario a enviar al mock API
//     const newUser = {
//       name: username,
//       email: email,
//       password: password
//     };

//     // Enviar la solicitud POST al mock API
//     fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newUser)
//     })
//     .then(response => {
//       // Manejar la respuesta del mock API
//       console.log(response);
//       // Limpiar los campos después de enviar el formulario
//       setName('');
//       setEmail('');
//       setPassword('');
//       setErrorMessage(''); // Limpiar el mensaje de error si el registro es exitoso
//     })
//     .catch(error => {
//       // Manejar errores de la solicitud
//       console.error('Error:', error);
//     });
//   }
// })
// .catch(error => {
//   console.error('Error al verificar el email:', error);
//   setErrorMessage('Hubo un error al verificar el email. Por favor, inténtalo de nuevo.');
// });


//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}> 
//         <label>
//           Nombre:
//           <input
//             type="text"
//             name="nombre"
//             value={formData.nombre}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Apellidos:
//           <input
//             type="text"
//             name="apellidos"
//             value={formData.apellidos}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit" onClick={handleSubmit}>Enviar</button>
//       </form>
//     </div>
//   );

// };

// export default Register;
