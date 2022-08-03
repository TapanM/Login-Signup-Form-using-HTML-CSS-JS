let signIn = document.getElementsByClassName("sign-in-container");
let signUp = document.getElementsByClassName("sign-up-container");

let signInButton = document.getElementById('sign-in-btn');
let signUpButton = document.getElementById('sign-up-btn');
// console.log(signInButton);
// console.log(signUpButton);

function changeBg_one(){
    document.getElementById('in').style.backgroundColor = "var(--bg-sky)";
    document.getElementById('up').style.backgroundColor = "white";
}

function changeBg_two(){
    document.getElementById('up').style.backgroundColor = "var(--bg-sky)";
    document.getElementById('in').style.backgroundColor = "white";
}