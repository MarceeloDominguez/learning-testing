export const usContext = ({ clave, firstName, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    nombre: firstName,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

// const persona = {
//   clave: "NICKNAME",
//   edad: 10,
//   firstName: "Marcelo",
//   latlng: {
//     lat: 14.1232,
//     lng: -12.3232,
//   },
// };

// const {
//   nombreClave,
//   anios,
//   nombre,
//   latlng: { lat, lng },
// } = usContext(persona);

// console.log(nombreClave, anios);
// console.log(lat, lng);
