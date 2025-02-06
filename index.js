const togglebtn = document.getElementById("togglebtn");
const navlinks = document.getElementById("navlinks");
togglebtn.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})