
const container = document.querySelector('#container')



for (let i = 1; i <= 150; i++) {
    const div = document.createElement('div')
    div.classList.add('pokeman')
    const span = document.createElement('span')
    span.innerText = i
    const newImg = document.createElement('img')
    newImg.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`

    div.appendChild(newImg)
    div.appendChild(span)
    container.appendChild(div)
}



