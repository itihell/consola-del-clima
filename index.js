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
