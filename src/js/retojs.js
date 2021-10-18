//Molde para Preguntas
class Preguntas{
    constructor(text, respuestas, resp_correcta){
        this.text = text;
        this.respuestas = respuestas;
        this.resp_correcta = resp_correcta;
    }
}

//Preguntas
pregunta1 = new Preguntas(
        'Aqui va la pregunta1',
        ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
        'RespuestaCorrecta'
);
pregunta2 = new Preguntas(
    'Aqui va la pregunta2',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta3 = new Preguntas(
    'Aqui va la pregunta3',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta4 = new Preguntas(
    'Aqui va la pregunta4',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta5 = new Preguntas(
    'Aqui va la pregunta5',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta6 = new Preguntas(
    'Aqui va la pregunta6',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta7 = new Preguntas(
    'Aqui va la pregunta7',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta8 = new Preguntas(
    'Aqui va la pregunta8',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta9 = new Preguntas(
    'Aqui va la pregunta9',
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'],
    'RespuestaCorrecta'
);
pregunta10 = new Preguntas(
    'Aqui va la pregunta10', //text
    ['Respuesta1', 'Respuesta2', 'Respuesta3', 'Respuesta4'], //respuestas
    'RespuestaCorrecta' //resp_correcta
);

//Array que almacena las preguntas
arrayPreguntas = [
    pregunta1, pregunta2, pregunta3, pregunta4, pregunta5,
    pregunta6, pregunta7, pregunta8, pregunta9, pregunta10
];


//Funcion que generara un array con 5 valores aleatorios
function indicesAzar(array){
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
//Se eligen los primeros 5 valores de indice y se almacenan en el array indiceAzar
indiceAzar = [];
indiceAzar = indicesAzar(arrayPreguntas).slice(0, 5);

//Array para almacenar las preguntas elegidas al azar
preguntasAzar = [];
for (let i = 0; i < (arrayPreguntas.length/2); i++) {
    preguntasAzar[i] = arrayPreguntas[indiceAzar[i]];
}


document.getElementById('pregunta1').innerHTML = preguntasAzar[0].text;
document.getElementById('resp1Preg1').innerHTML = preguntasAzar[0].respuestas[0];
document.getElementById('resp2Preg1').innerHTML = preguntasAzar[0].respuestas[1];
document.getElementById('resp3Preg1').innerHTML = preguntasAzar[0].respuestas[2];
document.getElementById('resp4Preg1').innerHTML = preguntasAzar[0].respuestas[3];


//for (let index = 0; index < (arrayPreguntas.length/2); index++) {
//    console.log(preguntasAzar[index].text);
//}
//console.log(indice);
//console.log(indiceAzar);
//console.log(arrayPreguntas[0])
//document.getElementById('pregunta1').innerHTML = pregunta1.pregunta;
//console.log(document.getElementById('A1'));
//document.getElementById('respPreg1').innerHTML = pregunta1.respuestas[0];