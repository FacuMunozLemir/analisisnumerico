import { ErrorResponse } from "@remix-run/router";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

const data = [
  {
    id: 9,
    titulo: "Noticia 9",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 8,
    titulo: "Noticia 8",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 7,
    titulo: "Noticia 7",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 6,
    titulo: "Noticia 6",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 5,
    titulo: "Noticia 5",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 4,
    titulo: "Noticia 4",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho másPrograma para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 3,
    titulo: "Noticia 3",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 2,
    titulo: "Noticia 2",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
  {
    id: 1,
    titulo: "Noticia 1",
    fecha: "10 / 03 / 2023",
    subtitulo: "windows",
    cuerpo:
      "Programa para computadoras con SO Windows principalmente pensado para llevar el control tus pacientes, con sus fichas medicas, fotos, y mucho más",
  },
];

const enlaces = [
  {
    id: 1,
    texto: "Libros de la cátedra",
    enlace: "https://www.crystal-desarrollo.com",
    orden: 1,
  },
  {
    id: 2,
    texto: "Configuración de Solver",
    enlace:
      "https://www.youtube.com/watch?v=ZN0upz1Wciw&ab_channel=ElT%C3%ADoTech",
    orden: 2,
  },
  {
    id: 3,
    texto: "Uso de solver",
    enlace:
      "https://www.youtube.com/watch?v=dLw8ZrWT8pc&ab_channel=SergioAlejandroCampos-EXCELeINFO",
    orden: 3,
  },
  {
    id: 4,
    texto: "Bibliografía",
    enlace: "./documents/MetodosNumericosParaIngenierosStevenCChapra.pdf",
    orden: 4,
  },
  {
    id: 5,
    texto: "Graficadora de funciones",
    enlace: "https://es.symbolab.com/graphing-calculator",
    orden: 5,
  },
  {
    id: 6,
    texto: "Calculadora de funciones",
    enlace: "https://es.symbolab.com/solver/functions-calculator",
    orden: 6,
  },
];

//Obtenemos todos los elementos
async function getItems(limite) {
  let data1 = [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}

//Obtenemos los elementos filtrados por categoría
export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.categoria == cat;
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 500);
  });
}

//Obtenemos un elemento filtrado por id
export function getSingleElement(idUnico) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id == idUnico;
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 500);
  });
}

export async function getEnlaces() {
  return new Promise((resolve, reject) => {
    let enlace = enlaces.sort(function (a, b) {
      return b.orden - a.orden;
    });

    setTimeout(() => {
      if (enlace) resolve(enlace);
      else reject(new Error("item no encontrado"));
    }, 500);
  });
}

export default getItems;
