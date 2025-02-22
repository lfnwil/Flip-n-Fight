document.addEventListener('DOMContentLoaded', async function() {
    if (window.location.pathname === '/missions') {
      const response = await fetch('/api/v1/missions');
      const missions = await response.json();
      const missionsList = document.getElementById('missions-list');
      missions.forEach(mission => {
        const listItem = document.createElement('li');
        listItem.textContent = `${mission.title}: ${mission.description}`;
        missionsList.appendChild(listItem);
      });
    }
  
    if (window.location.pathname === '/heroes') {
      const response = await fetch('/api/v1/heroes');
      const heroes = await response.json();
      console.log(heroes);
      const heroesList = document.getElementById('heroes-list');
      heroes.forEach(hero => {
        const listItem = document.createElement('li');
        listItem.textContent = `${hero.alias} - Pouvoir: ${hero.power} - Date d'apparition des pouvoirs: ${hero.powerDate}`;
        heroesList.appendChild(listItem);
      });
    }
  });
  