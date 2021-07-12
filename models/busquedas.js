const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San José"];

  constructor() {}

  async ciudad(lugar = "") {
    try {
      const url = `https://reqres.in/api/users?page=2`;
      const data = await axios.get(url);

      console.log(data.data);

      return []; //Retornar las ciudades
    } catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;
