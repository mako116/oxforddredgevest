// const hambuger = document.getElementById("hamburger")
// const navBar = document.querySelector(".navbar-nav")
// const overlay = document.querySelector(".overlay")
// const close_menu = document.querySelector("close_menu")

// hambuger.addEventListener("click", function() {
//     navBar.classList.toggle("show")
//     overlay.classList.toggle("show")
// })
// close_menu.addEventListener("click", function() {
//     navBar.classList.remove("show")
//     overlay.classList.remove("show")
// })
// overlay.addEventListener("click", function() {
//     close_menu.click()
// })

const numbers = document.querySelectorAll('#number')
const speed = 200;
numbers.forEach(number => {
    const updateCount = () => {
        const target = +number.getAttribute('data-target')
        const count = +number.innerText;
        const inc = target / speed;
        if (count < target) {
            number.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }

    }
    updateCount()
})