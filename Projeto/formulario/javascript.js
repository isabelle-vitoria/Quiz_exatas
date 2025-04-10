//modo escuro e claro
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

   // JavaScript para adicionar ou remover a classe scrolled com base na rolagem da página
   window.onscroll = function () {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};
