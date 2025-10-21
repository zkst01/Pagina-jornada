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
    const loop2exampleButton = document.getElementById('loop2Example');
    const resultadoBucle2 = document.getElementById('resultadoBucle2');
    const bucleDoExampleButton = document.getElementById('loopdoExample');
    const resultadoBucleDo = document.getElementById('resultadoBucledo');

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

    if (loop2exampleButton) {
        loop2exampleButton.addEventListener('click', function() {
            resultadoBucle2.innerHTML = '';
            let i = 1;
            while (i <= 5) {
                resultadoBucle2.innerHTML += `Iteración del bucle: ${i}<br>`;
                i++;
            }
        });
    }    

    if (bucleDoExampleButton) {
        bucleDoExampleButton.addEventListener('click', function() {
            resultadoBucleDo.innerHTML = '';
            let i = 1;
            do {
                resultadoBucleDo.innerHTML += `Iteración: ${i}<br>`;
                i++;
            } while (i <= 5);
        });
    }

});    
