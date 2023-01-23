let colorInput = document.getElementById("colorInput")
let background = document.querySelector("body")
let button = document.getElementById("button")

button.addEventListener('click', () =>{
    let inputValue = colorInput.value;
    console.log(inputValue);
    background.style.background=`${inputValue}`;
})