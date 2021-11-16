let iconos;
let selecciones = [];
let contador = 0;
function cargarIconos() {
    iconos = [
        '<i class="fas fa-traffic-light"></i>',
        '<i class="fas fa-disease"></i>',
        '<i class="fas fa-cube"></i>',
        '<i class="fas fa-dice-d20"></i>',
        '<i class="fas fa-cubes"></i>',
        '<i class="fas fa-dice-four"></i>',
        '<i class="fas fa-dice-two"></i>',
        '<i class="fas fa-dice-five"></i>',
        '<i class="fas fa-dice-one"></i>',
        '<i class="fas fa-dice-three"></i>',
        '<i class="fas fa-folder-open"></i>',
        '<i class="fas fa-question-circle"></i>'
    ]
}

generarTablero();

function generarTablero() {
    //contador = 0;
    //selecciones = [];
    cargarIconos();
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
            <div class="area-tarjeta" onclick = "seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id = "trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <i class="fas fa-question-circle"></i>
                    </div>
                </div>
            </div>
        `);
        if (i % 2 == 1) {
            iconos.splice(0, 1);
        }
    }
    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");

    document.getElementById("stylesTab").innerHTML = `
        <style>
            #tablero{
                padding-top: 20px;
                padding-bottom: 20px;
            }
        </style>
    `;
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones);
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let tr1 = document.getElementById("trasera" + selecciones[0]);
        let tr2 = document.getElementById("trasera" + selecciones[1]);
        if (tr1.innerHTML != tr2.innerHTML) {
            let t1 = document.getElementById("tarjeta" + selecciones[0]);
            let t2 = document.getElementById("tarjeta" + selecciones[1]);
            t1.style.transform = "rotateY(0deg)";
            t2.style.transform = "rotateY(0deg)";
        } else {
            tr1.style.background = "plum";
            tr2.style.background = "plum";
            contador++;
            //validacion
            if (contador == 12) {
                let resultado = document.getElementById("result");
                resultado.innerHTML = `
                    <br><br><br>
                    <div id="resultado"><h3>GANASTE!!</h3></div>
                    <br><br><br>
                `;
                let btn = document.getElementById("btnNewGame");
                btn.removeAttribute("hidden");
                btn.innerHTML = "Nuevo Juego"
                document.getElementById("saltosdeLinea").innerHTML = "<br><br><br>";
            }
        }
    }, 1000);
}
