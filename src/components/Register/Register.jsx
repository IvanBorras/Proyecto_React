import React, { useState } from 'react';

const FormRegister = () => {
  // variables de estado
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //EVENTOS

  const handleChangeName = (ev) => {
    setuserName(ev.target.value);
  };

  const handleChangeEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Verificar si el email ya está registrado
    fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users')
      .then(response => response.json())
      .then(users => {
        const userExists = users.some(user => user.email === email);

        if (userExists) {
          setErrorMessage('El email ya está registrado. Por favor, usa otro email.');
        } else {
          setErrorMessage('Registro exitoso');
          // Construir el objeto de usuario a enviar al mock API
          const newUser = {
            name: username,
            email: email,
            password: password
          };

          // Enviar la solicitud POST al mock API
          fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users', {
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
    <span>
        <h2>Registro</h2>
      <form className='formRegister' onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
        <span className='containerRegister'>
          <span>
            <label>Username</label>
            <input placeholder='Introduce tu Nombre' type="text" value={username} onChange={handleChangeName} required />
          </span>
          <span>
            <label>Email</label>
            <input placeholder='Introduce tu Email' type="email" value={email} onChange={handleChangeEmail} required />
          </span>
          <span>
            <label>Password</label>
            <input placeholder='Introduce una contraseña' type="password" value={password} onChange={handleChangePassword} required />
          </span>
        </span>
        <button type="submit">Registrar</button>
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
