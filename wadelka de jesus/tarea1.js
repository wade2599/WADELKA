const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

const pedirNumero = () => {
  rl.question("Ingrese un número entre 1 y 100: ", (numeroIngresado) => {
    intentos++;

    if (numeroIngresado === numeroAleatorio.toString()) {
      console.log(`¡Felicitaciones! Adivinaste el número correcto (${numeroAleatorio}) en ${intentos} intentos.`);
      rl.close();
    } else if (numeroIngresado < numeroAleatorio) {
      console.log("El número que buscas es mayor.");
      pedirNumero();
    } else {
      console.log("El número que buscas es menor.");
      pedirNumero();
    }
  });
};

pedirNumero();