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
        value: 1,
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

const confirmar = async (message = "") => {
  const questions = [
    {
      type: "confirm",
      name: "ok",
      message: message,
    },
  ];
  const { ok } = await inquirer.prompt(questions);

  return ok;
};

const listarTareasCheckList = async (tareas) => {
  const items = tareas.map((item, index) => {
    return {
      value: item.id,
      name: `${((index + 1).toString() + ".").green} ${item.description}`,
      checked: item.completed ? true : false,
    };
  });

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices: items,
    },
  ];

  const { ids } = await inquirer.prompt(questions);

  return ids;
};

module.exports = {
  inquirerMenus,
  pause,
  leer,
  listarLugares,
  confirmar,
  listarTareasCheckList,
};
