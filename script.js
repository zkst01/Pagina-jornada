document.addEventListener('DOMContentLoaded', function() {
    const loopExampleButton = document.getElementById('loopExample');
    const conditionalExampleButton = document.getElementById('conditionalExample');
    const booleanExampleButton = document.getElementById('booleanExample');
    const bucleOutput = document.getElementById('resultadoBucles');
    const condicionalOutput = document.getElementById('resultadoCondicionales');
    const booleanOutput = document.getElementById('resultadoBooleanos');
    const functionExampleButton = document.getElementById('functionExample');
    const functionOutput = document.getElementById('resultadoFunciones');
    const operatorExampleButton = document.getElementById('operatorExample');
    const operatorOutput = document.getElementById('resultadoOperadores');
    const arrayExampleButton = document.getElementById('arrayExample');
    const arrayOutput = document.getElementById('resultadoArrays');

    

    if (loopExampleButton) {
        loopExampleButton.addEventListener('click', function() {
            bucleOutput.innerHTML = '';
            for (let i = 1; i <= 5; i++) {
                bucleOutput.innerHTML += `Iteración del bucle: ${i}<br>`;
            }
        });
    }

    if (conditionalExampleButton) {
        conditionalExampleButton.addEventListener('click', function() {
            const number = Math.floor(Math.random() * 10);
            condicionalOutput.innerHTML = `Numero generado: ${number}<br>`;
            if (number % 2 === 0) {
                condicionalOutput.innerHTML += 'El número es par.';
            } else {
                condicionalOutput.innerHTML += 'El número es impar.';
            }
        });
    }

    if (booleanExampleButton) {
        booleanExampleButton.addEventListener('click', function() {
            const isTrue = true;
            booleanOutput.innerHTML = `El valor booleano es: ${isTrue}`;
        });
    }

    if  (functionExampleButton) {
         functionExampleButton.addEventListener('click', function() {
            let nombreuser = document.getElementById('nombreusuario').value;
            function saludar(nombre) {
                return "Hola, " + nombre + "!";
            }
            functionOutput.innerHTML = saludar(nombreuser);
        });
    }

    if (operatorExampleButton) {
        operatorExampleButton.addEventListener('click', function() {
            const a = 10;
            const b = 5;
            const suma = a + b;
            const resta = a - b;
            const multiplicacion = a * b;
            const division = a / b;
            operatorOutput.innerHTML = `Suma: ${suma}<br>Resta: ${resta}<br>Multiplicación: ${multiplicacion}<br>División: ${division}`;
        });
    }

    if (arrayExampleButton) {
        arrayExampleButton.addEventListener('click', function() {
            let frutas = ["manzana", "banana", "cereza"];
            for (let i = 0; i < frutas.length; i++) {
            console.log(frutas[i]);
            }
            arrayOutput.innerHTML = `Frutas en el array: ${frutas.join(', ')}`;   
        })
    }
});
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

do {
    
} while (condition);