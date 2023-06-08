
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
                <a href="../parte 2 copy/index2.html"><li class="cinza">
                    About   
                </li></a>
                <li class="bold">
                    Base Stnis
                </li>
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
                    <td class="cinza">hp</td>
                    <td class="bold">${pokemon.hp}<input type="range" class="bola" value="${pokemon.hp}" min="0" max="100">100</td>
                </tr>
                <tr>
                    <td class="cinza">attack</td>
                    <td class="bold">${pokemon.ataque}<input type="range" class="bola" value="${pokemon.ataque}" min="0" max="100">100</td>
                </tr>
                <tr>
                    <td class="cinza">defense</td>
                    <td class="bold">${pokemon.defesa}<input type="range" class="bola" value="${pokemon.defesa}" min="0" max="100">100</td>
                </tr>
                <tr>
                    <td class="cinza">sp.atk</td>
                    <td class="bold">${pokemon.atk}<input type="range" class="bola" value="${pokemon.atk}" min="0" max="100">100</td>
                </tr>

            </table>



            <table class="tabela2">
                <tr>
                    <td class="cinza">sp.def</td>
                    <td class="bold">${pokemon.def}<input type="range" class="bola" value="${pokemon.def}" min="0" max="100">100</td>
                </tr>
                <tr>
                    <td class="cinza">speed</td>
                    <td class="bold">${pokemon.speed}<input type="range" class="bola" value="${pokemon.speed}" min="0" max="100">100</td>
                </tr>
                <tr>
                    <td class="cinza">total</td>
                    <td class="bold">${pokemon.total}<input type="range" class="bola" value="${pokemon.total}" min="0" max="500">500</td>
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

    var numero = mais.stats.map((base_stat) => base_stat.base_stat);
    var num = numero;

    pokemon.hp = num[0];

    pokemon.ataque = num[1];

    pokemon.defesa = num[2];

    pokemon.atk = num[3];

    pokemon.def = num[4];

    pokemon.speed = num[5];

    var y = 0;

    for(var i = 0;i < num.length;i++){
        y += num[i]
    }

    pokemon.total = y;

    pokemon.foto = mais.sprites.other.dream_world.front_default;

    var types = mais.types.map((typelist) => typelist.type.name);
    var [type] = types;

    pokemon.type = type;
    pokemon.types = types;

    return agora(pokemon);
}

class pokemo{
    name;
    id;
    hp;
    ataque;
    defesa;
    atk;
    def;
    speed;
    total;
    type;
    types;
    foto;
}

