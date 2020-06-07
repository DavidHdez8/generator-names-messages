const nombres = [
    "David",
    "Cristina",
    "Adriana",
    "Vianey",
    "Maria",
    "Jorge",
    "Cristian",
    "Daniel",
    "Adrian",
    "Guadalupe"
];

const randomMsg = () => {
    const message = nombres[Math.floor(Math.random() * nombres.length)];
    console.log(message);
}


module.exports = { randomMsg };