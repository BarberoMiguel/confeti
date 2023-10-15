//variables 
const colores = ["palevioletred", "brown", "green", "aquamarine", "darkgoldenrod", "blue", "hotpink", "rebeccapurple", "firebrick", "burlywood", "fuchsia", "palegreen", "darkorange", "royalblue", "red", "yellow", "purple"];
const posNeg = [1, -1];
const points = ["0,5 1,0 1.7,1.7", "0,5 2,0 4.2,4.2", "0,5 4,0 8.7,8.7", "0,5 4,0 8.7,8.7", "0,5 4,0 7.6,7.6", "0,5 4,0 7.6,7.6", "0,5 4,0 8.7,8.7", "0,5 2,0 4.0,4.0", "0,5 2,0 4.0,4.0", "0,5 2,0 4.2,4.2", "0,5 2,0 4.2,4.2", "0,5 1,0 2.4,2.4", "0,5 3,0 5.5,5.5", "0,5 4,0 7.1,7.1", "0,5 3,0 5.0,5.0", "0,5 3,0 5.0,5.0", "0,5 4,0 6.3,6.3", "0,5 4,0 6.3,6.3", "0,5 4,0 7.0,7.0", "0,5 3,0 5.0,5.0"];
const figura = ["circle", "rect", "polygon"]

//sacar un valor aleatorio de las variables
function valorAleatorio(array) {
    let i = Math.round(Math.random()*(array.length-1))
    return array[i];
}

//pintar el confeti en el DOM
let section = document.createElement("section");
section.id = "confeti";
document.querySelector("body").appendChild(section);
let temp = "";
for (let i = 0; i < 200; i++) {
    let figuraAleatoria = valorAleatorio(figura);
    if (figuraAleatoria == "circle") {
        temp += `<svg height="5" width="5" style="--speed: ${(Math.random()*4)+1}; --spread-distance: ${(Math.random()*50)*valorAleatorio(posNeg)}vw">
                        <circle cx="2.5" cy="2.5" r="2.5" fill=${valorAleatorio(colores)}></circle>
                </svg>`;
    } else if (figuraAleatoria == "rect") {
        let dimensiones = (Math.random()*8) + 2;
        temp += `<svg height="5" width="5" style="--speed: ${(Math.random()*4)+1}; --spread-distance: ${(Math.random()*50)*valorAleatorio(posNeg)}vw">
                    <rect x="0" y="0" width="${dimensiones}" height="${dimensiones}" fill=${valorAleatorio(colores)}></rect>
                </svg>`;
    } else {
        temp += `<svg height="5" width="5" style="--speed: ${(Math.random()*4)+1}; --spread-distance: ${(Math.random()*50)*valorAleatorio(posNeg)}vw">
                    <polygon points=${valorAleatorio(points)} fill=${valorAleatorio(colores)}></polygon>
                </svg>`;
    }
    section.innerHTML = temp;
}

