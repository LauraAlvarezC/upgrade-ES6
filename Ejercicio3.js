//Iteración #3: Spread Operator

//3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

const copyPointList = [...pointsList];
console.log(copyPointList);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copytoy = { ...toy };
console.log(copytoy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
//spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const totalpointsList = [...pointsList1, ...pointsLis2];
console.log(totalpointsList);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
//con spread operators.

const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const totaltoy = { ...toy1, ...toyUpdate };
console.log(totaltoy);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const [amarillo , ...restOfTheColors] = colors;



console.log(restOfTheColors);
