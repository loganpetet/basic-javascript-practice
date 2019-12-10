*http://github.com/loganpetet.com
*http://loganpetet.netlify.com


#**This is where I practiced my Basic Javascript skills.**

1. **The use of slice in a string** - const capitalize = s => {
    if (typeof s !== 'string') return ''
    return s[0].toUpperCase() + s.slice(1)
}

2. **The use of conditional logic and value comparison** - if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }

    function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

function color(type) {
    if (type === 'fire') {
        return '#f6b282'
    } else if (type === 'fairy') {
        return '#f4c1cd'

3. **The use of Java objects** - pokeCard, pokeFront, pokeBack, pokeScene

#**This is where I practiced the use of ES6**

1. **The use of proper let and const** - let pokeNum = getPokeNumber(single_pokemon.id)
let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    const maleCharacters = people.filter(person => person.gender === "male")
const femaleCharacters = people.filter(person => person.gender === "female")

2. **The use of arrow functions** - starships.forEach(ship => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')

    shipName.textContent = ship.name

    let shipNum = getCharNumber(ship.url)

    shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`

    shipDiv.appendChild(shipName)
    shipDiv.appendChild(shipPic)
    contentArea.appendChild(shipDiv)
})
femaleButton.addEventListener('click', event => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        matchedDiv[0].setAttribute("style", "display: none;")
    })
})

3. **Use of import and export** - import { starships } from '../assets/starships.js'
import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

#**The use of basic data structures**