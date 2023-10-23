// // Estrutura: switch-case

// switch {

//     case 1:
//         console.log('Opção é 1');
//         break;
//     case 2:
//         console.log('Opção é 2');
//         break;
//     default:
//         console.log('Nenhuma das opções');
//         break;
    
// }

// // equivalente a estrutura switch-case
// if (opcao === 1){
//     console.log('Opção é 1'); 
// }else if ('opcao é 2') {
//     console.log('Opção é 2');
// }else {
//     console.log('Nenhuma das opções')
// } 

// Estrutura de repetição: do-while


// Estrutura de repetição: while (enquanto)

function urnaEletronica() {


        let 

            senhaMesario,
            voto,
            totalVotosCandidato1 = 0,
            totalVotosCandidato2 = 0,
            totalVotosCandidato3 = 0,
            totalVotosBranco = 0,
            totalVotosNulo = 0,
            totalVotos,
            resposta;
}
            
        do {
            senhaMesario = parseInt (prompt("Por favor, insira a senha do numérica de seis digitos de mesário"));
            confirm("Está certo de que esta será a sua senha? " + "Senha: " + senhaMesario);
        }while(confirm("Está certo de que esta será a sua senha?") != true);

        do {
              
            nomeCandidato1 = prompt("Digite o nome do candidato 1");
            nomeCandidato2 = prompt("Digite o nome do candidato 2");
            nomeCandidato3 = prompt("Digite o nome do candidato 3");
            confirm("Os nomes dos candidatos estão corretos?" + " " + nomeCandidato1 + ", " + nomeCandidato2 + ", " + nomeCandidato3);

         }while(confirm("Os nomes dos candidatos estão corretos?" + " " + nomeCandidato1 + ", " + nomeCandidato2 + ", " + nomeCandidato3) != true);
                
            do {
            console.log("Iniciando o programa");
    
            console.log("|1| " + nomeCandidato1);
            console.log("|2| " + nomeCandidato2);
            console.log("|3| " + nomeCandidato3);
            console.log("|5| Branco");
            
            voto = parseInt(prompt("Digite a opção de voto"));
                
            
            console.clear();
            
            switch(voto) {
                
                case 1:
                    totalVotosCandidato1++;
                    console.log ("Candidato " + nomeCandidato1 + ", recebeu um voto");
                    break;
            
                case 2:
                    totalVotosCandidato2++;
                    console.log ("Candidato " + nomeCandidato2 + ", recebeu um voto");
                    break;
            
                case 3:
                    totalVotosCandidato3++;
                    console.log ("Candidato " + nomeCandidato3 + ", recebeu um voto");
                    break;
            
                case 5:
                    totalVotosBranco++;
                    console.log ("O voto foi branco");
                    break;
            
                case senhaMesario:
                    resposta = String(prompt("Tem certeza que deseja encerrar a votação [s/n]?"));
                    break;   
                        
                default:
                    confirm("Voto Nulo, tem certeza?");
                    totalVotosNulo++;
                    console.log ("O voto foi nulo");
                    break;
                    return;
                        
                    }            
                             
            }while(resposta != "s");
                      
            if (totalvotosCandidato1 > totalvotosCandidato2 && totalvotosCandidato1 > totalvotosCandidato3) {
                nomeGanhador = nomeCandidato1;
                votosGanhador = totalVotosCandidato1 + totalVotosBranco;
            } else if (totalvotosCandidato2 > totalvotosCandidato1 && totalvotosCandidato2 > totalvotosCandidato3) {
                nomeGanhador = nomeCandidato2;
                votosGanhador = totalvotosCandidato2 + totalvotosBranco;
            } else if (totalvotosCandidato3 > totalvotosCandidato1 && totalvotosCandidato3 > totalvotosCandidato2) {
                nomeGanhador = nomeCandidato3;
                totalvotosGanhador = totalvotosCandidato3 + totalvotosBranco;
            } else {
                ganhador = false;
            }
                
                        
            totalVotos = totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosBranco+totalVotosNulo;
                    console.log("Votação encerrada");
                    console.log("Total e % de votos:");
                    console.log("Candidato " + nomeCandidato1 + ": " + totalVotosCandidato1 + " voto(s) " + (totalVotosCandidato1/totalVotos*100).toFixed(2) + "%");
                    console.log("Candidato " + nomeCandidato2 + ": " + totalVotosCandidato2 + " voto(s) " + (totalVotosCandidato2/totalVotos*100).toFixed(2) + "%");
                    console.log("Candidato " + nomeCandidato3 + ": " + totalVotosCandidato3 + " voto(s) " + (totalVotosCandidato3/totalVotos*100).toFixed(2) + "%");
                    console.log("Brancos: " + totalVotosBranco + " voto(s) " + (totalVotosBranco/totalVotos*100).toFixed(2) + "%");
                    console.log("Nulos: " + totalVotosNulo + " voto(s) " + (totalVotosNulo/totalVotos*100).toFixed(2) + "%");

                    console.log("#-----------#")

                    if (ganhador) {
                        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
                    } else {
                        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
}