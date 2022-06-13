console.log("Hola mundo")
console.log("Nathan")
setTimeout(() => {
    const titlePage = document.querySelector('h1')
    titlePage.innerHTML = 'Nathan'
    titlePage.classList.add('red')
}, 4000)