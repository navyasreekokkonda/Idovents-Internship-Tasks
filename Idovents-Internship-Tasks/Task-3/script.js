const pokemonList = document.getElementById('pokemon-list');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(res => res.json())
  .then(data => {
    loading.style.display = 'none';
    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(details => {
          pokemonList.innerHTML += `
            <div class="card">
              <img src="${details.sprites.front_default}" alt="${pokemon.name}">
              <h2>${pokemon.name}</h2>
            </div>
          `;
        });
    });
  })
  .catch(err => {
    loading.style.display = 'none';
    errorDiv.textContent = "Failed to load Pokémon data.";
  });
