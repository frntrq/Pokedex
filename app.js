let pokemon;
if(pokemon==undefined){
    pokemon = "pikachu";
    api(pokemon);
} else {
    api(pokemon);
}
function api(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res=> res.json())
    .then((data)=> {
        let pic = document.querySelector("#pokeimg");
        pic.src=data.sprites.front_default;
        document.getElementById("name").textContent = data.name;
        let type = document.querySelector("#type");
        type.textContent = `${data.types[0].type.name} type pokemon`;
        let moves = document.querySelector("#moves-list");
        for(i=0; i<6; i++){
            let li = document.querySelectorAll("li")[i];
            li.textContent = data.moves[i*8].move.name;
        }
        let height = document.querySelector("#height");
        height.textContent = `Height: ${data.height}`;
        let weight = document.querySelector("#weight");
        weight.textContent = `Weight: ${data.weight}`;
        let form = document.querySelector("form");
        form.addEventListener("submit", search)
        function search(e){
            e.preventDefault();
            let pokeName = document.querySelector("input").value.toLowerCase();
            api(pokeName);
        };
    console.log(data);
    });
}