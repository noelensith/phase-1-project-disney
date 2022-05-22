document.addEventListener('DOMContentLoaded', () => {

    const result = document.getElementById('prev-result')
    const searchBar = document.getElementById('search')
    const pokemonName = document.getElementById('name')
    const pokemonImg = document.getElementById('img')
    const pokemonType = document.getElementById('type')
    const pokemonShinyActivator = document.getElementById('shiny')
    const likeBtn = document.getElementById('likeBtn')
    let query = '';
    let pokemons = [];
    
    //event listeners
    
    searchBar.addEventListener('input', (e) => {
        query = e.target.value.toLowerCase();
        setTimeout(showPokemon, 3000)

    })

    likeBtn.addEventListener('click', () => {
        likePokemon()
        addPokemon()
    })
    
    //functions
    
    const fetchPokemon = async () => {
        pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, {
            method: 'GET',
        })
            .then(res => res.json())
    }

    const showPokemon = async () => {
        await fetchPokemon();
        const pokemonsArr = [pokemons]

        pokemonsArr.filter(pokemon => pokemon.name).forEach(pokemon => {
            const names = pokemon.name
            const types = pokemon.types[0].type.name
            
            pokemonShinyActivator.innerHTML = `Click on ${names.toUpperCase()} to display shiny version`
            pokemonName.innerHTML = names.toUpperCase()
            pokemonType.innerHTML = types.toUpperCase()
            
            const regPkmnSprite = pokemon.sprites.front_default
            const shinyPkmnSprite = pokemon.sprites.front_shiny
            
            pokemonImg.setAttribute('src', pokemon.sprites.front_default)
            pokemonImg.addEventListener('click', (e) => {
                if (e.target.className === 'reg-pokemon') {
                    pokemonImg.setAttribute('src', shinyPkmnSprite)
                    pokemonImg.className = 'shiny-pokemon'
                } else {
                    pokemonImg.setAttribute('src', regPkmnSprite)
                    pokemonImg.className = 'reg-pokemon'
                }
            })
        })
    }

    const addPokemon = async () => {
        await fetchPokemon();

        const pokemonsArr = [pokemons]
        const li = document.createElement('li')
    
        pokemonsArr.filter(pokemon => pokemon.name).forEach(pokemon => {
            const names = pokemon.name
            const types = pokemon.types[0].type.name
        
            const pokeName = document.createElement('p')
            const pokeType = document.createElement('p')
            const appendedPokemonImg = document.createElement('img')
        
            const regPkmnSprite = pokemon.sprites.front_default
            const shinyPkmnSprite = pokemon.sprites.front_shiny
            
            appendedPokemonImg.setAttribute('src', pokemon.sprites.front_default)
            appendedPokemonImg.setAttribute('id', 'pokemon-img')
            appendedPokemonImg.addEventListener('click', (e) => {
                if (e.target.className === 'reg-pokemon') {
                    appendedPokemonImg.setAttribute('src', shinyPkmnSprite)
                    appendedPokemonImg.className = 'shiny-pokemon'
                } else {
                    appendedPokemonImg.setAttribute('src', regPkmnSprite)
                    appendedPokemonImg.className = 'reg-pokemon'
                }
            })
            pokeName.innerText = names.toUpperCase()
            pokeType.innerHTML = types.toUpperCase()
            
            li.appendChild(pokeName)
            li.appendChild(pokeType)
            li.appendChild(appendedPokemonImg)
        })
        result.appendChild(li)
    }
})  
//     function likePokemon(e) {
//         const 
//         if (e.className === "liked") {
        
//     }
//     }
// })
    // showPokemon();

//     function getChars(query) {
//         return fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`, {
//             method: 'GET',
//             headers: {
//                 "Content-type": "application/json;charset=UTF-8",
//                 Accept: "application/json"
//             }
//         })
//             .then(response => response.json())
//             .then(characters => {
//                 const regPkmnSprite = characters.sprites.front_default
//                 const shinyPkmnSprite = characters.sprites.front_shiny
//                 pokemonImg.setAttribute('src', characters.sprites.front_default)
//                 pokemonImg.addEventListener('click', (e) => {
//                     if (e.target.className === 'reg-pokemon') {
//                         pokemonImg.setAttribute('src', shinyPkmnSprite)
//                         pokemonImg.className = 'shiny-pokemon'
//                     } else {
//                         pokemonImg.setAttribute('src', regPkmnSprite)
//                         pokemonImg.className = 'reg-pokemon'
//                     }
//     })
//                 const names = characters.name
//                 const types = characters.types[0].type.name
//                 pokemonShinyActivator.innerHTML = `Click on ${names.toUpperCase()} to display shiny version` 
//                 pokemonName.innerHTML = names.toUpperCase()
//                 pokemonType.innerHTML = types.toUpperCase()
//             })
//     }
// }
// }