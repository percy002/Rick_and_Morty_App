export const Validation = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexInt = /\d/
  const errors ={}
  console.log(inputs.email.length);

  (inputs.email.length == 0) && (errors.email = 'este campo no debe estar vacio');
  (inputs.email.length >= 35) && (errors.email = 'debe tener mas de 35 caracteres');
  (! regexEmail.test(inputs.email)) && (errors.email = 'debe ser un correo electronico');

  (! regexInt.test(inputs.password)) && (errors.password = 'contraseña debe contener almenos un numero');

  (inputs.password.length <= 6 && inputs.password.length >= 10) && (errors.password = 'contraseña debe contener de 6 a 10 caracteres');

  return errors
};
// export default Validation
