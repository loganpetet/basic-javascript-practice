import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('Hey, I am JavaScript on your page!')

let mainArea = document.querySelector('main') 

/*films.forEach(function(film) {
let filmDiv = document.createElement('div')
let title = document.createElement('h1')
let crawl = document.createElement('p')

filmDiv.appendChild(title)
filmDiv.appendChild(crawl)

title.textContent = film.title
crawl.innerText = film.opening_crawl


mainArea.appendChild(filmDiv)
}); */
const maleCharacters = people.filter(person => person.gender === "male")
const femaleCharacters = people.filter(person => person.gender === "female")
const allDivs = mainArea.querySelectorAll('div')


let maleButton = document.createElement('button')
let femaleButton = document.createElement('button')

mainHeader.appendChild(maleButton)
maleButton.textContent("Male Characters")
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(elt => {
            return elt.firstChild.textContent === elt.name 
        })
        console.log(matchedDiv)
        
        matchedDiv.setAttribute("style", "display: none;")
    })


    
})

mainHeader.appendChild(femaleButton)
femaleButton.textContent("Female Characters")
femaleButton.addEventListener('click', event => {
    femaleCharacters.forEach(elt => {
        /*elt.setAttribute("style", "visibility:hidden");*/
    })
    

})

let mainHeader = document.querySelector('header')

people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    pic.setAttribute('class', 'picDivs')

    personDiv.appendChild(pic)
    personDiv.appendChild(name)
    personDiv.appendChild(gender)

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = 'https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'

    mainArea.appendChild(personDiv)
});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }}

