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

    function CambiarUArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const choiseSections = document.querySelectorAll('section[id*="choise"]');
    choiseSections.forEach(section => {
        const form = section.querySelector('form');
        if (!form) return;

        const labels = Array.from(form.querySelectorAll('label'));
        if (labels.length > 1) {
            labels.forEach(l => l.remove());

            const shuffled = CambiarUArray(labels);
            shuffled.forEach(l => {
                const wrapper = document.createElement('div');
                wrapper.style.marginBottom = '6px';
                const input = l.querySelector('input[type="radio"]');
                if (input) input.checked = false;
                wrapper.appendChild(l);
                form.appendChild(wrapper);
            });
        }

        let feedback = section.querySelector('.choise-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'choise-feedback';
            feedback.style.marginTop = '8px';
            feedback.style.fontWeight = '700';
            section.appendChild(feedback);
        }

        const radios = section.querySelectorAll('input[type="radio"]');
        if (radios.length === 0) return;
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                radios.forEach(r => {
                    const lab = r.closest('label');
                    if (lab) {
                        lab.style.color = '';
                        lab.style.fontWeight = '';
                    }
                });
                const selected = section.querySelector('input[type="radio"]:checked');
                if (!selected) return;
                const label = selected.closest('label');
                const isCorrect = String(selected.dataset.correct) === 'true';
                if (label) {
                    label.style.color = isCorrect ? 'green' : 'red';
                    label.style.fontWeight = '600';
                }
                feedback.textContent = isCorrect ? 'Correcto' : 'Incorrecto';
                feedback.style.color = isCorrect ? 'green' : 'red';
            });
        });
    });

    const completarSections = document.querySelectorAll('section[id*="completar"]');
    completarSections.forEach(section => {
        const form = section.querySelector('form');
        if (!form) return;
        const input = form.querySelector('input[type="text"]');
        const button = form.querySelector('button');
        if (!input || !button) return;

        const respuestasCorrectas = {
            'actividad-1-completar': ['let', 'const', 'var'],
            'actividad-2-completar': ['for'],
            'actividad-3-completar': ['return'],
            'actividad-4-completar': ['push'],
            'actividad-5-completar': ['while']
        };

        let feedback = section.querySelector('.completar-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'completar-feedback';
            feedback.style.marginTop = '10px';
            feedback.style.fontWeight = 'bold';
            form.appendChild(feedback);
        }

        button.addEventListener('click', (e) => {
            e.preventDefault();
            const key = section.id || '';
            const respuestasValidas = respuestasCorrectas[key] || respuestasCorrectas[key.toLowerCase()] || [];
            const respuestaUsuario = input.value.trim().toLowerCase();
            const esCorrecta = respuestasValidas.includes(respuestaUsuario);

            feedback.textContent = esCorrecta ? '¡Correcto!' : 'Incorrecto, intenta de nuevo';
            feedback.style.color = esCorrecta ? 'green' : 'red';
            input.style.borderColor = esCorrecta ? 'green' : 'red';

            if (esCorrecta) {
                input.disabled = true;
                button.disabled = true;
            }
        });
    });

    const hacerSections = document.querySelectorAll('section[id*="hacer"]');
    hacerSections.forEach(section => {
        const textarea = section.querySelector('textarea');
        const runButton = section.querySelector('button[id*="run"]');
        const output = section.querySelector('pre');

        if (!textarea || !runButton || !output) return;

        // Validadores para cada actividad
        const validadores = {
            'Actividad-1-hacer': (codigo) => {
                try {
                    eval(codigo);
                    const resultado = output.textContent.trim();
                    return resultado == "HOLA MUNDO";
                } catch(e) {
                    return false;
                }
            },
            'Actividad-2-hacer': (codigo) => {
                try {
                    // Simula entrada de usuario para prompt
                    let promptCalls = 0;
                    let alertCalls = 0;
                    window.prompt = () => {
                        promptCalls++;
                        return "5"; // Simula entrada del usuario
                    };
                    window.alert = (msg) => {
                        alertCalls++;
                        output.textContent += msg + "\n";
                    };
                    
                    eval(codigo);
                    
                    // Verifica que se usaron 2 prompts y 4 alerts (suma, resta, multiplicación, división)
                    return promptCalls === 2 && alertCalls === 4;
                } catch(e) {
                    return false;
                }
            },
            'Actividad-3-hacer': (codigo) => {
                try {
                    let numeros = [];
                    console.log = (num) => numeros.push(num);
                    
                    eval(codigo);
                    
                    // Verifica que se imprimieron los números del 1 al 10
                    return numeros.join(',') === '1,2,3,4,5,6,7,8,9,10';
                } catch(e) {
                    return false;
                }
            },
            'Actividad-4-hacer': (codigo) => {
                try {
                    let input = 5; // Simula entrada de 5 para factorial
                    window.prompt = () => input.toString();
                    let resultado;
                    window.alert = (msg) => {
                        resultado = parseInt(msg);
                    };
                    
                    eval(codigo);
                    
                    // Verifica que el resultado es 120 (5!)
                    return resultado === 120;
                } catch(e) {
                    return false;
                }
            }
        };

        // Botón Ejecutar
        runButton.addEventListener('click', () => {
            try {
                const codigo = textarea.value;
                output.textContent = ''; // Limpia el output anterior
                
                const validador = validadores[section.id];
                if (!validador) {
                    throw new Error('Actividad no encontrada');
                }

                const esCorrecta = validador(codigo);
                
                output.textContent += '\n' + (esCorrecta ? 
                    '¡Correcto! El programa funciona como se esperaba' : 
                    'Incorrecto. El programa no cumple con los requisitos');
                output.style.color = esCorrecta ? 'green' : 'red';
                
                if (esCorrecta) {
                    textarea.disabled = true;
                    runButton.disabled = true;
                }
            } catch (error) {
                output.textContent = 'Error al ejecutar:\n' + error;
                output.style.color = 'red';
            }
        });
    });

});
