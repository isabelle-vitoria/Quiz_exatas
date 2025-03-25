const entrar = document.querySelector('#entrar')
entrar.addEventListener('click', async function (event){
      event.preventDefaul();
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    if (nome == "" || email == "" || senha == "" ) {
      alert("Por favor, preencha todos os campos")
    }

    else {
      const resposta = await fetch(`http://192.168.1.50:3000/login`,{
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: nome, 
          email: email,
          senha: senha

        })
      })

      if (resposta.status == 200) {
        let mensagem = await resposta.json();
        alert('Bem vindo!')
      }
      else {
        alert('Usuario e senho incorreta!!')
      }

    }

    })

