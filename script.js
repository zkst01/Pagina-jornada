document.addEventListener('DOMContentLoaded', function() {
    const loopExampleButton = document.getElementById('loopExample');
    const conditionalExampleButton = document.getElementById('conditionalExample');
    const booleanExampleButton = document.getElementById('booleanExample');
    const bucleOutput = document.getElementById('resultadoBucles');
    const condicionalOutput = document.getElementById('resultadoCondicionales');
    const booleanOutput = document.getElementById('resultadoBooleanos');

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
});