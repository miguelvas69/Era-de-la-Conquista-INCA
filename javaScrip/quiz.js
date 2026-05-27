
let perfil = document.getElementById("perfil")
let sexo = localStorage.getItem('genero')
let nome = localStorage.getItem("nomeUsuario")
let per = document.getElementById("desc")
let res = document.getElementById('res')
const musica = new Audio("audio/pergunta.mp4");
let moral = 20
let tropa = 20
let recurso = 20
let atual = 0

document.getElementById("nome").innerText = nome

if (sexo === "homem") {
    document.getElementById("perfil").innerHTML = '<img src="imagens/avatarH.png" id = "img">'
} else if (sexo === "mulher") {
    document.getElementById("perfil").innerHTML = '<img src="imagens/avatarM.png" id = "img">'
}

const perguntas = [

    {
        pergunta:
            "Los exploradores regresan de las fronteras informando que los españoles están formando alianzas con pueblos enemigos del imperio, ofreciendo protección y ventajas políticas a cambio de apoyo militar. Mientras algunos asesores defienden un acercamiento diplomático para evitar una guerra inmediata, otros advierten que permitir la entrada de extranjeros podría revelar rutas estratégicas y debilidades del territorio inca.",

        respostas: [

            {
                texto:
                    "Permitir que los españoles entren para negociar alianzas.",

                moral: -2,
                recursos: 0,
                exercito: 0
            },

            {
                texto:
                    "Recibirlos bajo estricta vigilancia militar.",

                moral: 1,
                recursos: -1,
                exercito: 0
            },

            {
                texto:
                    "Atacar inmediatamente cualquier aproximación extranjera.",

                moral: -2,
                recursos: -4,
                exercito: -4
            },

            {
                texto:
                    "Fingir neutralidad mientras se preparan trampas secretas.",

                moral: -5,
                recursos: -3,
                exercito: -3
            }

        ]
    },

    {
        pergunta:
            "Después de una larga sequía, varias aldeas sufren hambre y miles de personas migran hacia la capital en busca de protección. El ejército exige prioridad en los alimentos restantes, afirmando que sin soldados el imperio caerá rápidamente, mientras los sacerdotes advierten que abandonar al pueblo destruirá la confianza en el gobernante.",

        respostas: [

            {
                texto:
                    "Concentrar los alimentos únicamente en el ejército.",

                moral: -7,
                recursos: -2,
                exercito: 5
            },

            {
                texto:
                    "Dividir los recursos equitativamente entre el pueblo y los soldados.",

                moral: 5,
                recursos: -6,
                exercito: -2
            },

            {
                texto:
                    "Guardar alimentos exclusivamente en la capital.",

                moral: -8,
                recursos: 4,
                exercito: -3
            },

            {
                texto:
                    "Invadir territorios vecinos en busca de recursos.",

                moral: -4,
                recursos: 6,
                exercito: -1
            }

        ]
    },

    {
        pergunta:
            "Mensajeros revelan que los españoles pretenden atravesar una región montañosa vital para la comunicación entre las ciudades incas. Un ataque preventivo podría retrasar el avance enemigo, pero la peligrosa geografía amenaza con causar enormes pérdidas al ejército.",

        respostas: [

            {
                texto:
                    "Ordenar un ataque frontal inmediato.",

                moral: -3,
                recursos: -5,
                exercito: -6
            },

            {
                texto:
                    "Observar los movimientos enemigos antes de actuar.",

                moral: 2,
                recursos: 0,
                exercito: 2
            },

            {
                texto:
                    "Enviar negociadores para ganar tiempo.",

                moral: -1,
                recursos: 1,
                exercito: -1
            },

            {
                texto:
                    "Dividir el ejército en pequeños grupos estratégicos.",

                moral: -2,
                recursos: -2,
                exercito: 3
            }

        ]
    },

    {
        pergunta:
            "El miedo crece dentro del imperio tras los relatos sobre armas desconocidas, caballos y armaduras españolas. Parte de la población comienza a creer que los invasores poseen protección divina, debilitando la confianza en el liderazgo inca.",

        respostas: [

            {
                texto:
                    "Permitir que los rumores se propaguen para evitar revueltas.",

                moral: -7,
                recursos: 0,
                exercito: -3
            },

            {
                texto:
                    "Castigar severamente a quienes difundan rumores.",

                moral: -5,
                recursos: -1,
                exercito: 2
            },

            {
                texto:
                    "Realizar ceremonias religiosas para unir al pueblo.",

                moral: 5,
                recursos: -2,
                exercito: 0
            },

            {
                texto:
                    "Ignorar completamente los rumores.",

                moral: -4,
                recursos: 0,
                exercito: -2
            }

        ]
    },

    {
        pergunta:
            "Un importante comandante inca es acusado de entregar información estratégica a los españoles. Parte de los líderes exige su ejecución inmediata, mientras otros creen que la acusación pudo haber sido creada por rivales políticos interesados en debilitar su influencia.",

        respostas: [

            {
                texto:
                    "Ejecutarlo inmediatamente para evitar riesgos.",

                moral: -6,
                recursos: 0,
                exercito: -3
            },

            {
                texto:
                    "Investigar en secreto antes de actuar.",

                moral: 3,
                recursos: -1,
                exercito: 1
            },

            {
                texto:
                    "Ignorar las acusaciones por confiar en el comandante.",

                moral: -3,
                recursos: -1,
                exercito: -5
            },

            {
                texto:
                    "Entregarlo a los españoles para evitar conflictos internos.",

                moral: -9,
                recursos: 0,
                exercito: -6
            }

        ]
    },

    {
        pergunta:
            "Una enfermedad desconocida comienza a propagarse rápidamente entre importantes ciudades del imperio. Los curanderos afirman que es necesario detener viajes y batallas, pero los generales advierten que cualquier pausa permitirá el avance español.",

        respostas: [

            {
                texto:
                    "Cerrar ciudades y detener desplazamientos.",

                moral: 2,
                recursos: -5,
                exercito: -2
            },

            {
                texto:
                    "Continuar la guerra normalmente.",

                moral: -6,
                recursos: -3,
                exercito: -4
            },

            {
                texto:
                    "Buscar ayuda de curanderos y sacerdotes tradicionales.",

                moral: 4,
                recursos: -2,
                exercito: 0
            },

            {
                texto:
                    "Ocultar la gravedad de la enfermedad a la población.",

                moral: -7,
                recursos: 0,
                exercito: -3
            }

        ]
    },

    {
        pergunta:
            "Los españoles ofrecen oro, armas y una falsa promesa de paz a cambio del control de importantes rutas comerciales cercanas a las montañas. Parte del consejo cree que aceptar podría evitar miles de muertes, mientras otros lo ven como el inicio del fin del imperio.",

        respostas: [

            {
                texto:
                    "Aceptar completamente el acuerdo español.",

                moral: -6,
                recursos: 5,
                exercito: -4
            },

            {
                texto:
                    "Rechazar cualquier negociación territorial.",

                moral: 3,
                recursos: -2,
                exercito: 2
            },

            {
                texto:
                    "Hacer un acuerdo temporal para ganar tiempo.",

                moral: -2,
                recursos: 2,
                exercito: 0
            },

            {
                texto:
                    "Entregar pequeñas regiones consideradas menos importantes.",

                moral: -5,
                recursos: 3,
                exercito: -2
            }

        ]
    },

    {
        pergunta:
            "Después de sucesivas derrotas, parte de la población abandona antiguas tradiciones y comienza a huir de las ciudades. Líderes locales empiezan a cuestionar su capacidad para proteger el imperio.",

        respostas: [

            {
                texto:
                    "Organizar grandes festivales religiosos para unir al pueblo.",

                moral: 6,
                recursos: -3,
                exercito: 0
            },

            {
                texto:
                    "Obligar a toda la población a luchar por el imperio.",

                moral: -7,
                recursos: -1,
                exercito: 3
            },

            {
                texto:
                    "Trasladar parte de la población a regiones montañosas.",

                moral: 2,
                recursos: -4,
                exercito: 1
            },

            {
                texto:
                    "Abandonar aldeas menores para proteger únicamente la capital.",

                moral: -9,
                recursos: 2,
                exercito: -3
            }

        ]
    },

    {
        pergunta:
            "Los sacerdotes revelan la existencia de un antiguo templo escondido entre las montañas sagradas de Inti. El lugar posee pasajes secretos, reservas de alimento y una enorme importancia espiritual para el pueblo inca.",

        respostas: [

            {
                texto:
                    "Transformar el templo en refugio para el pueblo.",

                moral: 5,
                recursos: 2,
                exercito: 0
            },

            {
                texto:
                    "Ocultar el templo incluso a los aliados.",

                moral: -3,
                recursos: 3,
                exercito: 0
            },

            {
                texto:
                    "Usar el templo como fortaleza militar.",

                moral: -4,
                recursos: -1,
                exercito: 4
            },

            {
                texto:
                    "Destruir los pasajes secretos para evitar invasiones.",

                moral: -6,
                recursos: -3,
                exercito: -2
            }

        ]
    },

    {
        pergunta:
            "El ejército español finalmente rodea la capital del imperio. Sus soldados están cansados, parte de la población desea rendirse y los consejeros discrepan completamente sobre cuál debe ser su última decisión como gobernante.",

        respostas: [

            {
                texto:
                    "Liderar personalmente la batalla final.",

                moral: 5,
                recursos: -4,
                exercito: -6
            },

            {
                texto:
                    "Negociar una rendición parcial para preservar vidas.",

                moral: -3,
                recursos: 2,
                exercito: -3
            },

            {
                texto:
                    "Sacrificar la capital para salvar al resto del pueblo.",

                moral: 2,
                recursos: -6,
                exercito: -2
            },

            {
                texto:
                    "Huir solo durante la noche.",

                moral: -12,
                recursos: 0,
                exercito: -8
            }

        ]
    }

];

function atualizarStatus() {

    document.getElementById("moral")
        .innerText =
        `Moral: ${moral}`;

    document.getElementById("recursos")
        .innerText =
        `Recursos: ${recurso}`;

    document.getElementById("tropa")
        .innerText =
        `Ejército: ${tropa}`;

}

function carregar() {

    if (atual >= perguntas.length) {

        per.innerText =
            "Fin del juego";

        res.innerHTML = "";

        return;

    }

    res.innerHTML = "";

    per.innerText =
        perguntas[atual].pergunta;

    perguntas[atual]
        .respostas
        .forEach(resposta => {

            const botao =
                document.createElement("button");

            botao.innerText =
                resposta.texto;

            botao.onclick = () => {

                moral += resposta.moral;

                recurso += resposta.recursos;

                tropa += resposta.exercito;

                moral = Math.max(0, moral);
                recurso = Math.max(0, recurso);
                tropa = Math.max(0, tropa);

                atualizarStatus();

                atual++;

                carregar();

            }

            res.appendChild(botao);

        });

}

function musicaT() {
    musica.loop = true;

    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}

function salvar() {
    localStorage.setItem("moral", moral);
    localStorage.setItem("recursos", recurso);
    localStorage.setItem("exercito", exercito);
}

atualizarStatus();