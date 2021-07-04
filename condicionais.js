var nome = 'George';

if (nome==='JC') {
    console.log("Legal! Seu nome é este mesmo.");
} else if (nome === 'Bombardelli'){
    console.log("Tudo bem! Você também serve.");
} else {
    console.log("Que pena! Seu nome não é JC!");
}

switch (nome) {
    case 'JC':
        console.log('Legal! Você é o JC mesmo!');
        break;
    case 'Bombardelli':
        console.log('Ah! Você também serve!');
        break;
    default:
        console.log('Que pena! Você não é quem eu estou procurando.');
        break;
}