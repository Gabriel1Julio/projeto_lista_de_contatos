const form = document.getElementById('form-contatos');
let numeros = [];

let linhas = " ";

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
})

function mascaraTelefone(){
    const numero = document.getElementById('numero');
    return numero.value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}


function adicionarLinha(){
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const numero = document.getElementById('numero');

    if(numeros.includes(numero.value)){
        alert(`O numero de telefone: ${mascaraTelefone()} já está em sua lista de contatos`);
    } else {
        numeros.push(numero.value);

        let linha = `<tr> <td> ${nome.value} </td> <td> ${sobrenome.value} </td> <td> ${mascaraTelefone()} </td> </tr>`;

        linhas += linha;
    
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    nome.value = " ";
    sobrenome.value = " ";
    numero.value = " ";
}


