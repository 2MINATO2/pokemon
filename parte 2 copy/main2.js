
var comteiner = document.querySelector('.comteiner')


    
function agora(pokemon) {
    comteiner.innerHTML = `
    <div class="comteudo">
        <a href="../index.html"><table class="tt">
                <tr class="linha">
                <td class="s">←</td>
                <td class="c">🤍</td>
            </tr>
         </table></a>
         <samp class="um">#${pokemon.id}</samp>
         <table class="statu">
            <th>${pokemon.name}</th>
            <tr>
                <td>${pokemon.type}</td>
                <td>${pokemon.types[1]}</td>
            </tr>
         </table>
        </div>
        <img class="img" src="${pokemon.foto}">

        <div class="informação">
            <ul>
                <li class="bold">
                    About   
                </li>
                <a href="../parte 3 copy/index2.html"><li class="cinza">
                    Base Stnis
                </li></a>
                <li class="cinza">
                    Evolution
                </li>
                <li class="cinza">
                    Moves
                </li>
            </ul>
            <hr>



            <table class="tabela1">
                <tr>
                    <td class="cinza">Species</td>
                    <td class="bold">Seed</td>
                </tr>
                <tr>
                    <td class="cinza">Heigth</td>
                    <td class="bold">23,6 (0,${pokemon.heigth} cm)</td>
                </tr>
                <tr>
                    <td class="cinza">Welghi</td>
                    <td class="bold">15,2 lbs(${pokemon.weight} kg)</td>
                </tr>
                <tr>
                    <td class="cinza">Abilities</td>
                    <td class="bold">${pokemon.abilidade[0]}, Chlonophyl</td>
                </tr>

            </table>



            <table class="tabela2">
                <th>Breeding</th>
                <tr>
                    <td class="cinza">Gender</td>
                    <td class="bold">♂️ 97.5%</td>
                    <td class="bold">♀️ 12.5%</td>
                </tr>
                <tr>
                    <td class="cinza">Egg Groups</td>
                    <td class="bold">Monster</td>
                </tr>
                <tr>
                    <td class="cinza">Egg Cycle</td>
                    <td class="bold">${pokemon.type}</td>
                </tr>
            </table>

        </div>
    `}


caminho = (poke) => {
    return fetch(poke.url)
    .then((covert) => covert.json())
    //.then((t) => console.log(t))
    .then((y) => comverte(y))
}


function pokemon(){
var url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1`
return fetch(url)
.then((pokemon) => (pokemon).json())
.then((resultado) => (resultado.results))
.then((aparece) => aparece.map(caminho))
.then((caregar) => Promise.all(caregar))
.then((detalhe) => detalhe)
}

pokemon()

function comverte(mais) {
    var pokemon = new pokemo();
    pokemon.name = mais.name;
    pokemon.id = mais.id;

    var abilities = mais.abilities.map((abili) => abili.ability.name);

    pokemon.abilidade = abilities;
    pokemon.heigth = mais.height;
    pokemon.weight = mais.weight;
    pokemon.species = mais.species;

    pokemon.foto = mais.sprites.other.dream_world.front_default

    var types = mais.types.map((typelist) => typelist.type.name);
    var [type] = types;

    pokemon.type = type;
    pokemon.types = types;

    return agora(pokemon);
}

class pokemo{
    name;
    id;
    abilidade;
    heigth;
    welghi;
    species;
    type;
    types;
    foto;
}

