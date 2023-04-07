const button = document.getElementById("login");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");


button.addEventListener('click', function(e){
   e.preventDefault()

    let valueInputName = inputEmail.value;
    let valueInpuPassword = inputPassword.value;

    if(valueInputName && valueInpuPassword){

       let data =  {
            "email" : valueInputName,
            "password" : valueInpuPassword
        }

        //coloque esta url https://lucy-register.onrender.com/auth/login

        fetch('https://lucy-register.onrender.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
       }).then((res) => {
        if(res.status == 200) {
        let responseReq =  res.json() 
         localStorage.setItem('token', JSON.stringify(responseReq.token))
         return location.href = 'pages/home.html'
        }
        alert("Email e senha invalido!")
       }).catch((err) => {
        //alert("Email e senha invalido!")
    })

    }else{
        alert('Por favor preencha certo os campos')
    }
})