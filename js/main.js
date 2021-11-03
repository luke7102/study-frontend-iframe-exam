let welcomeEle = document.querySelector('#welcome-msg');

function hello(name) {
    console.log(name);
    welcomeEle.textContent = name;
}

