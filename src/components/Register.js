import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    dietaryPreferences: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="number" name="age" placeholder="Edad" onChange={handleChange} />
      <input type="number" name="weight" placeholder="Peso" onChange={handleChange} />
      <input type="number" name="height" placeholder="Altura" onChange={handleChange} />
      <input type="text" name="dietaryPreferences" placeholder="Preferencias Dietéticas" onChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
