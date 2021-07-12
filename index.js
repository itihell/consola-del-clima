const {
  inquirerMenus,
  pause,
  leer,
  listarTareasABorrar,
  confirmar,
  listarTareasCheckList,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  const busqueda = new Busquedas();
  let opt = "";

  do {
    opt = await inquirerMenus();

    switch (opt) {
      case 1:
        const lugar = await leer("Ciudad: ");

       await busqueda.ciudad(lugar);

        console.log("\nInformación de la ciudad\n".green);

        console.log("Ciudad: ");
        console.log("Lat: ");
        console.log("Lng: ");
        console.log("Temperatura: ");
        console.log("Mínima: ");
        console.log("Máxima: ");

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
