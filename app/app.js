fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-tarjetas");
    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${personajes[i].image}">
        <p class="nombre-personaje">${personajes[i].name}</p>
        <p>Sexo: ${personajes[i].gender}</p>
        <p>Especie: ${personajes[i].species}</p>
        <p>Estado: ${personajes[i].status}</p>
      </div>
      `;
    }
  });
