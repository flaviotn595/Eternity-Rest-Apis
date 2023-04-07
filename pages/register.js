const button = document.getElementById("button");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("passwordConfirm");

button.addEventListener('click', function (e) {
    e.preventDefault();

    
const nameValue = inputName.value;
const emailValue = inputEmail.value;
const passwordValue = inputPassword.value;
const confirmeValue = inputConfirmPassword.value;


 let data = {
        "name": nameValue,
        "email": emailValue,
        "password": passwordValue,
        "reappassword" : confirmeValue
    }

    console.log(data)
    if(passwordValue !== confirmeValue){
      return  alert("As senhas nao conferem!")
    } 

   //coloque esta url  https://lucy-register.onrender.com/auth/register

        fetch('https://lucy-register.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
       }).then((res) => {
        return res.json()
       }).then((res) => {
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.token))
        location.href = 'home.html'
       }).catch((err) => console.log(err))

}) 
