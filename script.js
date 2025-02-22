// Récupérer les données des héros et des missions
fetch('http://localhost:3000/api/v1/heroes/')
  .then((response) => response.json())
  .then((heroes) => {
    fetch('http://localhost:3000/api/v1/missions/')
      .then((response) => response.json())
      .then((missions) => {
        const heroesListContainer = document.getElementById('heroes-list');

        // Boucle sur chaque héros et créer une carte d'affichage
        heroes.forEach((hero) => {
          const heroCard = document.createElement('div');
          heroCard.classList.add('hero-card');

          heroCard.innerHTML = `
            <h2>${hero.alias}</h2>
            <p><strong>Identité :</strong> ${hero.identity}</p>
            <p><strong>Pouvoir :</strong> ${hero.power}</p>
            <p><strong>Date d'activation :</strong> ${hero.powerDate}</p>
            <h3>Missions :</h3>
            <ul>
              ${missions
                .filter((mission) => mission.heroes.includes(hero.id)) // Filtrer les missions associées au héros
                .map((mission) => `<li>${mission.title}</li>`)
                .join('')}
            </ul>
          `;
          heroesListContainer.appendChild(heroCard); // Ajouter la carte du héros dans le conteneur
        });
      })
      .catch((error) => console.error('Error fetching missions:', error));
  })
  .catch((error) => console.error('Error fetching heroes:', error));
