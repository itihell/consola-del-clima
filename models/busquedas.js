const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San José"];

  constructor() {}

  get paramMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramMapbox,
      });

      const data = await intance.get();
      console.log(data.data);

      return []; //Retornar las ciudades
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Busquedas;
