class Pokemon {
    constructor(id, name, stats) {
        this.id = id
        this.name = name
        this.base_stat = stats
    }
}

const Logemon = new Pokemon(800, 'Logemon', 123);

document.querySelector('#getHP').addEventListener('click', getHP(25))

function getHP(pokemonID) {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .then(element => {
            //console.log(muddsy.stats[5].stat.name)
            const HP = element.stats.find(element => {
                return element.stat.name === "hp"
            })
            console.log(HP.base_stat)
            return HP.base_stat
        })


}

document.querySelector('#pokeButton').addEventListener('click', () => {
    let pokeId = prompt("Provide a Pokemon ID you want to add:")
    let pokeIdNum = parseInt(pokeId, 10)
    console.log(pokeId)
    if (pokeIdNum > 807) {
        alert('That Pokemon ID does not exist! Please enter a different one.')
        return
    } else {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then(result => {
            populateDOM(result)
        })
            .catch(error => console.log(error))
    }
})

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25').then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url).then(pokedata => {
            populateDOM(pokedata)
        })
    }
})

let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {

    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeBack = document.createElement('div')
    let pokeFront = document.createElement('div')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped')

    });
}

function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    //name.textContent = `${data.name} height: ${data.height}`
    //pic.src = `../images/${pokeNum}.png`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)

}

function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card__face card__face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    pokeHP.textContent = data.hp
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)

}

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

