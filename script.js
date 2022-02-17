var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegaPokemon(quantidade.value);
});

pegaPokemon(3);

function pegaPokemon(quantidade){

    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon =>{

        var pokemon = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle =>{
                pokemon.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});

                if (pokemon.length == quantidade) {
                    //finalizamos nossa requisição.

                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = '';

                    pokemon.map(function(val){
                    /* <div class="pokemon-box">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
                            <p>Ditto</p>
                        </div>*/

                        pokemonBoxes.innerHTML += `
                        <div class="pokemon-box">
                            <img src="`+val.imagem+`" />
                            <p>`+val.nome+`</p>
                        </div>
                        
                        `

                    })
                }
            
            })
        })

        pokemon.map((val)=>{
            console.log(val.nome);
        })
    })
}
