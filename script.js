function onPageLoad () {
    // find burger button and header navigation
    const button = document.querySelector('#menubutton')
    const menu = document.querySelector('.navlinks')
    // detects when button is clicked
    button.addEventListener("click", function() {
            // console.log("Clicked")
            if( menu.classList.contains("open")) {
                menu.classList.remove("open")
            }
            else{
                menu.classList.add("open")
            }
    })
}
window.addEventListener("load", onPageLoad)