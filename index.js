require("dotenv").config();
const {
  inquirerMenus,
  pause,
  leer,
  confirmar,
  listarTareasCheckList,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busqueda = new Busquedas();
  let opt = "";

  do {
    opt = await inquirerMenus();

    switch (opt) {
      case 1:
        const buscar = await leer("Ciudad: ");

        const lugares = await busqueda.ciudad(buscar);

        const id = await listarLugares(lugares);

        const lugar = lugares.find((item) => item.id === id);

        const clima = await busqueda.clima(lugar.lat, lugar.lng);

        console.log("\nInformación de la ciudad\n".green);

        console.log("Ciudad: ", lugar.nombre);
        console.log("Lat: ", lugar.lat);
        console.log("Lng: ", lugar.lng);
        console.log("Temperatura: ", clima.temperatura);
        console.log("Mínima: ", clima.min);
        console.log("Máxima: ", clima.max);
        console.log("Clima: ", clima.clima);

        break;

      case 2:
        break;

      default:
        break;
    }

    await pause();
  } while (opt !== 0);
};

main();
