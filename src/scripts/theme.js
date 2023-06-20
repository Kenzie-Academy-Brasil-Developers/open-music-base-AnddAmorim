/* Desenvolva sua lógica aqui ... */
function renderDarkMode (){
    const darkModeButton = document.querySelector(".darkMode__button")
    const imageButton = document.querySelector(".img__button")
    const body = document.body
    
    darkModeButton.addEventListener("click", ()=>{
    body.classList.toggle("dark__mode")

    if(body.classList.contains("dark__mode")){
        imageButton.src = "./src/assets/img/sun.svg"
        localStorage.setItem('darkMode', true)
    }else{
        imageButton.src = "./src/assets/img/moon.svg"
        localStorage.setItem("darkMode", false)
        }
    })
}
renderDarkMode()