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