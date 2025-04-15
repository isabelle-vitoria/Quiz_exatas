document.addEventListener("DOMContentLoaded", loadquaest);
const enviar = document.querySelector('#but')
const titulo = document.querySelector('#titulo')
async function loadquaest() {
    userList.innerHTML = ""; // Limpa a tabela antes de carregar

    try {
        let resposta = await fetch("http://192.168.1.50:3000/questoes/");
        let users = await resposta[0].json(); 
        addUserToForm(users)
    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
    }
}

function addUserToForm(){
    const row = document.querySelector('userList')
  
    row.innerHTML = `
        <p id="titulo">${users.enunciado}</p>

            <input type="radio" name="size" id="size_1" value="Raiz, cauli, folhas, flor, fruto">
            <label id="q1" for="size_1">${users.alternativa_a}</label><br><br>

            <input type="radio" name="size" id="size_2" value="Flolhas e troncos">
            <label id="q2" for="size_2">${users.alternativa_b}</label><br><br>

            <input type="radio" name="size" id="size_3" value="Fruto,tronco e raiz">
            <label id="q3" for="size_3">${users.alternativa_c}</label><br><br>

            <input type="radio" name="size" id="size_4" value="Fruto,tronco e raiz">
            <label id="q4" for="size_4">${users.alternativa_d}</label><br><br>

            
    `;
}

enviar.addEventListener(click, function(){
    enviar.innerHTML = ""
    enviar.document.createElement('')
})