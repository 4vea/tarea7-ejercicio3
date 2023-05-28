const fechaHoy = new Date();
const fechaNacimiento = new Date(2003, 11, 18);

const hoyEsMayor = fechaHoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth()+1;
const anyoNacimiento = fechaNacimiento.getFullYear();