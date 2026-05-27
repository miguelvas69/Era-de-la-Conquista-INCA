let moral = Number(localStorage.getItem("moral"));
let recurso = Number(localStorage.getItem("recursos"));
let exercito = Number(localStorage.getItem("tropa"));

document.getElementById("moral").innerText =
    `Moral: ${moral}`;

document.getElementById("recurso").innerText =
    `Recursos: ${recurso}`;

document.getElementById("exercito").innerText =
    `Ejército: ${exercito}`;


let pontos = moral + recurso + exercito

document.getElementById("pontuação").innerText =
    `PUNTUACIÓN: ${pontos}`

if (pontos >= 80) {
    titulo = "O Herdeiro de Inti"
    imagem = "imagens/finais/finalE.png"
    final = "Contra todas las expectativas, su liderazgo unió al pueblo, fortaleció al ejército y preservó los recursos del imperio. Los españoles encuentran resistencia en todas las montañas, valles y pueblos. Inspirados por su determinación, los incas reorganizaron sus fuerzas y establecieron un nuevo centro de poder en las regiones más protegidas de los Andes. Las generaciones futuras contaron historias del gobernante que rechazó la derrota y mantuvo viva la llama del Sol. Su nombre se asoció con los antiguos héroes incas, convertirse en una figura casi legendaria. Algunos sacerdotes afirman que Inti observó sus hazañas y lo reconoció como un verdadero heredero del imperio";
}
else if (pontos >= 65) {
    titulo = "Guardião dos Andes"
    imagem = "imagens/finais/finalMB.png" 
    final = "Incluso frente a una adversidad casi imposible, lograste preservar la identidad de tu pueblo. Aunque el imperio sufrió pérdidas, la resistencia continuó en las montañas y los bosques, impidiendo que la cultura inca desapareciera por completo. Su legado se convirtió en un símbolo de coraje y su historia continuó contándose mucho después de su partida";
}
else if (pontos >= 45) {
    titulo = "Protetor de Tawantinsuyu"
    imagem = "imagens/finais/finalB.png"
    final = "Sus decisiones permitieron a miles de personas sobrevivir los años más difíciles de la invasión. El imperio no permaneció intacto, pero sus esfuerzos evitaron un colapso inmediato. Serás recordado como un gobernante que luchó hasta el final para proteger a su pueblo, incluso cuando la victoria parecía imposible";
}
else if (pontos >= 20) {
    titulo = "Senhor da Resistência"
    imagem = "imagens/finais/finalM.png"
    final = "Conseguiste retrasar el avance de los invasores y preservar parte de las tradiciones del imperio. Sin embargo, los conflictos internos y las dificultades económicas han debilitado su resistencia. Su pueblo recordará sus esfuerzos con respeto, pero también se preguntará si decisiones diferentes podrían haber cambiado el destino de la nación";
}
else if (pontos < 20) {
    titulo = "O Último Sapa Inca"
    imagem = "imagens/finais/finalR.png"
    final = "Sus decisiones hundieron al imperio en una crisis sin precedentes. La población perdió la confianza en su liderazgo, los recursos se agotaron y el ejército no pudo contener el avance enemigo. Las ciudades fueron abandonadas, las alianzas rotas y los últimos defensores derrotados. Cuando se escribió la historia, su nombre no apareció entre los grandes líderes, sino como el gobernante que presenció el fin de una de las civilizaciones más grandes de Estados Unidos";
}

document.getElementById("final").innerText =
final;

document.getElementById("titulo").innerText =
titulo;

document.getElementById("imagem").src=
imagem