const $personajesList = document.getElementById("personajesList");

fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) =>{
    console.log(respuesta);
   return respuesta.json();
  })
  .then((data) => {
    
    const personajes = data;
  //  console.log(personajes);

    personajes.forEach(
      (personaje) => {
        console.log(personaje.name);

        $personajesList.innerHTML += `<div class="grid-item bordes_redondeados house_${personaje.house}">${personaje.name}</div> \n`;


       // personaje.image?"imagen":"sin imagen";

      }
    );
  
  });
