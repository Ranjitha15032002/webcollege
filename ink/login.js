var email = document.getElementById("Email");
var pass = document.getElementById("Password");

function check()
{
    var cpass = document.getElementById("CPassword");

    if(pass!=cpass)
    {
        alert("Password values don't match!");
    }
}

function login()
{
    setCookie("emails",email,365);
    setCookie("passs",pass,365);
}

function loging()
{
    if(email==emails && pass==passs)
    {
        window.location="non.html";
    }
}