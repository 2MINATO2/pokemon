var pokedex = {}


class pokemo{
    number;
    name;
    type;
    types = [];
    photo;
}


function convertepokeapi(maisfacil){
    var pokemon = new pokemo()
    pokemon.number = maisfacil.id
    pokemon.name = maisfacil.name

    var types = maisfacil.types.map((typeSlot) => typeSlot.type.name)
    var [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = maisfacil.sprites.other.dream_world.front_default

    return pokemon
}


pokedex.getpoke = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertepokeapi)
}


pokedex.getpokemon = (offset = 0,limit = 5) => {
    var url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((body) => body.results)
    .then((pokem) => pokem.map(pokedex.getpoke))
    .then((caregar) => Promise.all(caregar))
    .then((detalhes) => detalhes)
}









