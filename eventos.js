let dataEvento = new Date(2022,10,18)
let dataHoje = new Date
let idadedoParticipante = 20
let quantidadedeParticipantes = 80
let nomedoParticipante = "Vítor Santos" 


if (dataEvento>dataHoje) {
    console.log("Data válida:")
    console.log (dataEvento)
}   else{
        console.log("Cadastro não permitido, data inválida.")
}
if (idadedoParticipante>=18) {
    console.log("Maior de 18 anos, cadastro permitido.")    
}   else {
        console.log("Cadastro permitido apenas para maiores de 18 anos.")
}
if (quantidadedeParticipantes<100) {
    console.log("Ingressos disponíveis.")
} else {
        console.log("Ingressos esgotados.")
}