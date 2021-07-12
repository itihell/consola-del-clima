const { green } = require("colors");
const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "que desea hacer..?",
    choices: [
      {
        value: 1,
        name: `${"1.".green} Buscar Ciudad`,
      },
      {
        value: 2,
        name: `${"2.".green} Historial`,
      },
      {
        value: 0,
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquirerMenus = async () => {
  console.clear();
  console.log("====================".green);
  console.log("  Menu de la app".green);
  console.log("====================".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];

  console.log("\n");

  await inquirer.prompt(question);
};

const leer = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message: message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

const listarLugares = async (lugares = []) => {
  const options = lugares.map((lugar, index) => {
    return {
      value: lugar.id,
      name: `${((index + 1).toString() + ".").green} ${lugar.nombre}`,
    };
  });

  options.unshift({
    value: "0",
    name: `${"0.".green} Cancelar`,
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Seleccione un lugar",
      choices: options,
    },
  ];

  const { id } = await inquirer.prompt(questions);

  return id;
};

module.exports = {
  inquirerMenus,
  pause,
  leer,
  listarLugares,
};
