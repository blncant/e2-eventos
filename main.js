/* Crear el array de objetos "Pizzas". Debemos crear 6 objetos como mínimo.
Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (debe ser una lista) y precio. */

let pizzas = [
	{
		id: 2,
		name: "Napolitana",
		ingredients: ["Salsa de tomate", "muzzarella", "tomate en rodajas", "morrón picado", "ajo", "perejil"],
		price: 1960,
	},
	{
		id: 9,
		name: "Calabresa",
		ingredients: ["Salsa de tomate", "muzzarella", "cantimpalo", "morrón picado"],
		price: 1980,
	},
	{
		id: 43,
		name: "Tres Quesos",
		ingredients: ["Salsa de tomate", "muzzarella", "provolone", "roquefort"],
		price: 2650,
	},
	{
		id: 29,
		name: "Gran Rulo",
		ingredients: [
			"Salsa de tomate",
			"muzzarella",
			"tomate en rodajas",
			"jamón",
			"cebolla",
			"huevo",
			"morrón",
			"provolone",
		],
		price: 2770,
	},
	{
		id: 20,
		name: "Canchera",
		ingredients: ["Salsa de tomate", "anchoas", "ajo", "aceite de oliva"],
		price: 1430,
	},
	{
		id: 37,
		name: "Fugazzeta",
		ingredients: ["Muzzarella", "cebolla", "provolone"],
		price: 1500,
	},
];

const form = document.querySelector(".form");
const numberInput = document.querySelector("#numberInput");
const messageContainer = document.querySelector("#message-container");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkId();
});

function checkId() {
	let message = "";
	messageContainer.style.display = "none";

	pizzas.find((pizza) => {
		if (numberInput.value == pizza.id) {
			message = `
        <h2>${pizza.name}, </h2> 
        <h3> $ ${pizza.price}</h3>
        `;
		}
		if (numberInput.value !== pizza.id) {
			//message = "El número ingresado no coincide con ningún id.";
			console.log("No estaría andando bien... seguiré practicando! :)");
		}
		if (isNaN(numberInput.value)) {
			message = "Por favor ingresar un número.";
		}
		if (message !== "") {
			messageContainer.style.display = "flex";
		}
		messageContainer.innerHTML = message;
	});
}
