let btn = document.querySelector('#light')
let body = document.body
btn.addEventListener('click', function(){
    body.classList.toggle('dark-mode'); 
    let icon = this.querySelector('i');
    if (icon.classList.contains('bi-brightness-high')) {
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');
      } else {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high');
      }

      
  });

const entrar = document.querySelector('#entrar')
entrar.addEventListener('click', async function (event){
      event.preventDefault();
    const email = document.querySelector('#d1').value
    const senha = document.querySelector('#d2').value

    if (email == "" || senha == "") {
      alert("Por favor, preencha todos os campos")
    }

    else {
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

      if (resposta.status == 200) {
        alert('Bem vindo!')
      }
      else {
        alert('Usuario e senho incorreta!!')
      }

    }

    })