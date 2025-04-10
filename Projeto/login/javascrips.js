const entrar = document.querySelector('#entrar')
entrar.addEventListener('click', async function (event){
      event.preventDefault();
    const email = document.querySelector('#d1').value
    const senha = document.querySelector('#d2').value

    if (email == "" || senha == "") {
      alert("Por favor, preencha todos os campos")
    }

    else {

      if (email == 'admin@admin' && senha == 12345) {
        window.location.href = '../Professor/index.html'
      }
      else{
        const resposta = await fetch(`http://192.168.1.50:3000/login`,{
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            senha: senha
          })
        })
      }
    }
      if (resposta.status == 200) {
        window.location.href = '../formulario/index.html'
      }
      else {
        alert('Usuario e senha incorreta!!')
      }
    })
   