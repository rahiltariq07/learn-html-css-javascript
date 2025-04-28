async function fetchData() {
    // Remove previous error
    const prevErr = document.querySelector('.error');
    if (prevErr) prevErr.remove();
  
    const nameInput = document.getElementById("pokemonName");
    const pokemonName = nameInput.value.trim().toLowerCase();
    const imgElement = document.getElementById("pokemonSprite");
  
    // If no name entered, show error
    if (!pokemonName) {
      showError("Please enter a Pokémon name.");
      return;
    }
  
    try {
      // Fetch from PokéAPI
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) throw new Error("Not found");
  
      const data = await response.json();
  
      // Set up image and trigger animation
      imgElement.classList.remove('visible');
      imgElement.src = data.sprites.front_default;
      imgElement.onload = () => {
        imgElement.classList.add('visible');
      };
    } catch (err) {
      showError("Pokémon not found! Try again.");
      console.error(err);
    }
  }
  
  // Display an error message below the controls
  function showError(msg) {
    const err = document.createElement('div');
    err.className = 'error';
    err.textContent = msg;
    document.body.appendChild(err);
  }
  
  // Wire up button click
  document.getElementById('fetchBtn')
          .addEventListener('click', fetchData);
  
  // Allow Enter key in input to trigger fetch
  document.getElementById('pokemonName')
          .addEventListener('keyup', e => {
            if (e.key === 'Enter') fetchData();
          });  