var pokemonlist = document.getElementById('pokemonlist') 

var botao = document.getElementById('botao')

var maximo = 151

var limit = 10

var offset = 0


function loadpokemon(offset,limit){
    pokedex.getpokemon(offset,limit).then((pokemon = []) => {
        var novohtml =  pokemon.map((pokemon) => `
        <li class="pokemons ${pokemon.type}" >
        
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol><a href="parte 2 copy/index2.html">
            <img src="${pokemon.photo}"
                alt="${pokemon.name}"></a>
        </div>
        
        </li>
        `).join('') 
        pokemonlist.innerHTML += novohtml
    })
}

loadpokemon(offset,limit)

botao.addEventListener('click', () => {
    offset += limit

    var carta = offset + limit

    if(carta >= maximo){
        var newlimit = maximo - offset
        loadpokemon(offset,newlimit)
        botao.parentElement.removeChild(botao)
    }else{
        loadpokemon(offset,limit)
    }
    
})








