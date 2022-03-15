

// var numero1 = prompt('DIGITE UM NUMERO') ;
// var numero2 = prompt('DIGITE O SEGUNDO NUMERO') ;

// var resultado = Number(numero1) + Number(numero2);

// alert(`A SOMA DELES ENTRE ${numero1} E ${numero2} É  ${resultado}`);     //  concatenação
//                                           //  para adição também

// ---------------------------------------------------------------------
// var nome = prompt('DIGITE SEU NOME')
// var sobrenome = prompt('DIGITE SEU SOBRENOME')

// var nomeInteiro = String(nome) +   String(sobrenome);

// document.write(`bem vindo ${nomeInteiro}`)

// -----------------------------------------------------------------------

// var a = document.getElementById('area');

// a.addEventListener('click', clicar);
// a.addEventListener('mouseenter', entrar)
// a.addEventListener('mouseout', sair) 

// function clicar(){
//     a.innerText = 'clicou!';
//     a.style.background = 'red';
// }

// function entrar(){
//     a.innerText = 'entrou';
// }

// function sair(){
//     a.innerText = 'vc saiu!';
//     a.style.background = 'blue'
// }
// ============================================================================


// function somar(){
//     var tn1 = document.getElementById('txt1')
//     var tn2 = document.querySelector('input#txt2')
//     var res = document.getElementById('res')
//     var n1 = Number(tn1.value)
//     var n2 = Number(tn2.value)
//     var s = n1 + n2 

    
//     res.innerHTML = `a soma entre ${n1} e ${n2} é igual a ${s}`
// }

// =================================================================================
// function verifique(){
//     var p = document.getElementById('país')
//     var res = document.getElementById('res');

//     var valor = String(p.value)
//     if(p == 'Brasil'){
//         res.innerHTML = `voce é do ${valor}, voce é brasileiro!`
//     }else{
//         res.innerHTML = `voce é de ${valor}, voce é um estrangeiro!`
//     }
// }

// =====================================================================================


// var agora = new Date()
// var diaSem = agora.getDay()

// diaSem = 5

// switch(diaSem){
//     case 0: 
//         console.log('Domingo')
//         break
//     case 1:
//         console.log('segunda')
//         break
//     case 2:
//         console.log('terça')
//         break
//     case 3:
//         console.log('quarta')
//         break
//     case 4:
//         console.log('quinta')
//         break
//     case 5:
//         console.log('sexta')
//         break
//     case 6:
//         console.log('sabado')
//         break
//         default:
//             console.log('erro')
//             break
// }

// ===============================================================

function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora < 12){

    img.src = './imagens/bom dia.jpg';
    document.body.style.background =' rgba(240, 205, 140, 0.678)'

}else if(hora < 18){

    img.src = './imagens/boa tarde.jpg';
    document.body.style.background =' rgb(187, 148, 76)'

}else{

    img.src= './imagens/boa noite.jpg';
    document.body.style.background =' rgb(25, 25, 90)'
}

};