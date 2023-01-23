let colorInput = document.getElementById("colorInput")
let background = document.querySelector("body")
let button = document.getElementById("button")
    button.addEventListener('click', () =>{
        let inputValue = colorInput.value;
        background.style.background=`${inputValue}`;
    })