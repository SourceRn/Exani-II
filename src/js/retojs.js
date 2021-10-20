//Molde para Preguntas
class Preguntas {
    constructor(text, respuestas, resp_correcta) {
        this.text = text;
        this.respuestas = respuestas;
        this.resp_correcta = resp_correcta;
    }
}

//Preguntas
pregunta1 = new Preguntas(
    '3 {1 + 2 [ 4 + 5 (6 - 7) + 8] - 9} =', ['a. -18', 'b. 18', 'c. 16', 'd. 13'],
    'b'
);
pregunta2 = new Preguntas(
    '3(4-5)2 + 4(5-1) - 3(1+2)2(2) + 2(3)(3) =', ['a. -26', 'b. -17', 'c. -94', 'd. 26'],
    'b'
);
pregunta3 = new Preguntas(
    '4 [ (5 + 3) - 22] =', ['a. -56', 'b. 10', 'c. 17', 'd. 18'],
    'a'
);
pregunta4 = new Preguntas(
    '150 + (25 * 2) + 32 / (8*2) =', ['a. 208', 'b. 202', 'c. 340', 'd. 58'],
    'b'
);
pregunta5 = new Preguntas(
    '(30 – 20) / 2 + (6*5) / 3 + (40 – 25) + (9-6) =', ['a. 20', 'b. 33', 'c. 30', 'd. 21'],
    'b'
);
//imgPregunt6 = document.createElement("img");
//imgPregunt6.src = "src/images/reto/ejercicios/eje6.PNG";
pregunta6 = new Preguntas(
    '-5{[(-3*2)/3]+1}+2-[-7(7-2)+1]', ['a. 13', 'b. 10', 'c. -9', 'd. 9'],
    'c'
);
//imgPregunt7 = document.createElement("img");
//imgPregunt7.src = "src/images/reto/ejercicios/eje7.jpeg";
pregunta7 = new Preguntas(
    '1/2(3/4 + 1/8)', ['a. 7/14', 'b. 5/16', 'c. 6/14', 'd. 7/16'],
    'd'
);
//imgPregunt8 = document.createElement("img");
//imgPregunt8.src = "src/images/reto/ejercicios/eje8.jpeg";
pregunta8 = new Preguntas(
    '(3/2 + 1/4) / (5/6 - 1/3)', ['a. 2/7', 'b. 3.5', 'c. -1.8', 'd. -7/2'],
    'b'
);
//imgPregunt9 = document.createElement("img");
//imgPregunt9.src = "src/images/reto/ejercicios/eje9.jpeg";
pregunta9 = new Preguntas(
    '(-1 + 3/4 - 1/3) / (2 - 1/4)', ['a. -1/3', 'b. 1/3', 'c. -0.66', 'd. 0.66'],
    'a'
);
pregunta10 = new Preguntas(
    '-0.3(4.2/10.5+(5.2)^2x√1.69-1.7', //text
    ['a. -13.5', 'b. 9.915', 'c. 9.5', 'd. -9.915'], //respuestas
    'd' //resp_correcta
);

//Array que almacena las preguntas
arrayPreguntas = [
    pregunta1, pregunta2, pregunta3, pregunta4, pregunta5,
    pregunta6, pregunta7, pregunta8, pregunta9, pregunta10
];


//Funcion que desordena un array y retorna uno nuevo
function indicesAzar(array) {
    //Array que almacenara los indices de las preguntas
    indice = [];

    //Se llena el array 'indice'
    for (let i = 0; i < array.length; i++) {
        indice[i] = i;
    }

    //Se colocan aleatoriamente los valores de indice
    indice.sort(() => Math.random() > 0.5 ? 1 : -1)

    return indice;
}

indiceAzar = [];
//Se eligen los primeros 5 valores de indice y se almacenan en el array indiceAzar
//indiceAzar = indicesAzar(arrayPreguntas).slice(0, 5);


//Se eligen los primeros 10 valores de indice y se almacenan en el array indiceAzar
indiceAzar = indicesAzar(arrayPreguntas).slice(0, 10);

//Array para almacenar las preguntas elegidas al azar
preguntasAzar = [];
//for (let i = 0; i < (arrayPreguntas.length/2); i++) {
//    preguntasAzar[i] = arrayPreguntas[indiceAzar[i]];
//}
for (let i = 0; i < arrayPreguntas.length; i++) {
    preguntasAzar[i] = arrayPreguntas[indiceAzar[i]];
}


function verificarRespuestas() {
    preguntasTotales = preguntasAzar.length;
    puntuacion = 0;

    formularioReto = document.forms.form;
    //console.log(formularioReto.eje1.value);

    //array para almacenar respuestas correctas
    respuestas = [];
    //buclque almacena las respuestas correctas de las preguntas al azar
    for (let index = 0; index < preguntasAzar.length; index++) {
        respuestas[index] = preguntasAzar[index].resp_correcta;
    }


    for (let i = 1; i <= preguntasAzar.length; i++) {
        if (formularioReto["eje" + i].value === null || formularioReto["eje" + i].value === "") {
            resultado.innerHTML = '<h3>Responde Todas las Preguntas: <span>Pregunta ' + 1 + ' Porfavor</span>';
            return false;
        } else {
            if (formularioReto["eje" + i].value === respuestas[i - 1]) {
                puntuacion++;
            }
        }
    }

    resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Obtuviste <span>' + puntuacion + '</span> de <span>' + preguntasTotales + '</span> puntos <h/3>';
    btnRepasar = document.getElementById("Repasar");
    btnRepasar.removeAttribute("hidden");
    btnReiniciar = document.getElementById("Reiniciar");
    btnReiniciar.removeAttribute("hidden");
    btnInicio = document.getElementById("Inicio");
    btnInicio.removeAttribute("hidden");

    return false;
}

function escribirHTML() {
    //Pregunta 1
    document.getElementById('pregunta1').innerHTML = preguntasAzar[0].text;
    document.getElementById('resp1Preg1').innerHTML = preguntasAzar[0].respuestas[0];
    document.getElementById('resp2Preg1').innerHTML = preguntasAzar[0].respuestas[1];
    document.getElementById('resp3Preg1').innerHTML = preguntasAzar[0].respuestas[2];
    document.getElementById('resp4Preg1').innerHTML = preguntasAzar[0].respuestas[3];
    //Pregunta 2
    document.getElementById('pregunta2').innerHTML = preguntasAzar[1].text;
    document.getElementById('resp1Preg2').innerHTML = preguntasAzar[1].respuestas[0];
    document.getElementById('resp2Preg2').innerHTML = preguntasAzar[1].respuestas[1];
    document.getElementById('resp3Preg2').innerHTML = preguntasAzar[1].respuestas[2];
    document.getElementById('resp4Preg2').innerHTML = preguntasAzar[1].respuestas[3];
    //Pregunta 3
    document.getElementById('pregunta3').innerHTML = preguntasAzar[2].text;
    document.getElementById('resp1Preg3').innerHTML = preguntasAzar[2].respuestas[0];
    document.getElementById('resp2Preg3').innerHTML = preguntasAzar[2].respuestas[1];
    document.getElementById('resp3Preg3').innerHTML = preguntasAzar[2].respuestas[2];
    document.getElementById('resp4Preg3').innerHTML = preguntasAzar[2].respuestas[3];
    //Pregunta 4
    document.getElementById('pregunta4').innerHTML = preguntasAzar[3].text;
    document.getElementById('resp1Preg4').innerHTML = preguntasAzar[3].respuestas[0];
    document.getElementById('resp2Preg4').innerHTML = preguntasAzar[3].respuestas[1];
    document.getElementById('resp3Preg4').innerHTML = preguntasAzar[3].respuestas[2];
    document.getElementById('resp4Preg4').innerHTML = preguntasAzar[3].respuestas[3];
    //Pregunta 5
    document.getElementById('pregunta5').innerHTML = preguntasAzar[4].text;
    document.getElementById('resp1Preg5').innerHTML = preguntasAzar[4].respuestas[0];
    document.getElementById('resp2Preg5').innerHTML = preguntasAzar[4].respuestas[1];
    document.getElementById('resp3Preg5').innerHTML = preguntasAzar[4].respuestas[2];
    document.getElementById('resp4Preg5').innerHTML = preguntasAzar[4].respuestas[3];
    //Pregunta 6
    document.getElementById('pregunta6').innerHTML = preguntasAzar[5].text;
    document.getElementById('resp1Preg6').innerHTML = preguntasAzar[5].respuestas[0];
    document.getElementById('resp2Preg6').innerHTML = preguntasAzar[5].respuestas[1];
    document.getElementById('resp3Preg6').innerHTML = preguntasAzar[5].respuestas[2];
    document.getElementById('resp4Preg6').innerHTML = preguntasAzar[5].respuestas[3];
    //Pregunta 7
    document.getElementById('pregunta7').innerHTML = preguntasAzar[6].text;
    document.getElementById('resp1Preg7').innerHTML = preguntasAzar[6].respuestas[0];
    document.getElementById('resp2Preg7').innerHTML = preguntasAzar[6].respuestas[1];
    document.getElementById('resp3Preg7').innerHTML = preguntasAzar[6].respuestas[2];
    document.getElementById('resp4Preg7').innerHTML = preguntasAzar[6].respuestas[3];
    //Pregunta 8
    document.getElementById('pregunta8').innerHTML = preguntasAzar[7].text;
    document.getElementById('resp1Preg8').innerHTML = preguntasAzar[7].respuestas[0];
    document.getElementById('resp2Preg8').innerHTML = preguntasAzar[7].respuestas[1];
    document.getElementById('resp3Preg8').innerHTML = preguntasAzar[7].respuestas[2];
    document.getElementById('resp4Preg8').innerHTML = preguntasAzar[7].respuestas[3];
    //Pregunta 9
    document.getElementById('pregunta9').innerHTML = preguntasAzar[8].text;
    document.getElementById('resp1Preg9').innerHTML = preguntasAzar[8].respuestas[0];
    document.getElementById('resp2Preg9').innerHTML = preguntasAzar[8].respuestas[1];
    document.getElementById('resp3Preg9').innerHTML = preguntasAzar[8].respuestas[2];
    document.getElementById('resp4Preg9').innerHTML = preguntasAzar[8].respuestas[3];
    //Pregunta 10
    document.getElementById('pregunta10').innerHTML = preguntasAzar[9].text;
    document.getElementById('resp1Preg10').innerHTML = preguntasAzar[9].respuestas[0];
    document.getElementById('resp2Preg10').innerHTML = preguntasAzar[9].respuestas[1];
    document.getElementById('resp3Preg10').innerHTML = preguntasAzar[9].respuestas[2];
    document.getElementById('resp4Preg10').innerHTML = preguntasAzar[9].respuestas[3];
}

escribirHTML();

//for (let index = 0; index < (arrayPreguntas.length/2); index++) {
//    console.log(preguntasAzar[index].text);
//}
//console.log(indice);
//console.log(indiceAzar);
//console.log(arrayPreguntas[0])
//document.getElementById('pregunta1').innerHTML = pregunta1.pregunta;
//console.log(document.getElementById('A1'));
//document.getElementById('respPreg1').innerHTML = pregunta1.respuestas[0];