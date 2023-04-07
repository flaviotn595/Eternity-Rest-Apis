let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecionando pai principal da seta
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


const buttonLogout = document.getElementById('logout')

buttonLogout.addEventListener('click', function(){
  if (localStorage.getItem("token")) {
    // deslogando da home
    localStorage.removeItem('token')
    //aqui em baixo ele vai carregar a pagina novamente entao  , o if de cima vai ser true e ele vai ser jogado 
    //pra fora da home sacas?
    location.reload(true);
}
})


//vendo se tem um token de usuario
if (localStorage.getItem("token") === null ) {
    // Não está na localStorage entao n ta logadokkkkkk
    location.href = '../index.html'
    alert('por favor faça login')
}

const body = document.querySelector('body');
let sidebarr = body.querySelector('nav');
let toggle = body.querySelector(".toggle");
let searchBtn = body.querySelector(".search-box");
let modeSwitch = body.querySelector(".toggle-switch");
let modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebarr.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebarr.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});