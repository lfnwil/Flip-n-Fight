const API_URL = "http://localhost:3000"; 

async function fetchHeroes() {
    try {
        const response = await fetch(`${API_URL}/heroes`);
        const heroes = await response.json();
        displayHeroes(heroes);
    } catch (error) {
        console.error("Erreur lors de la récupération des héros:", error);
    }
}

async function fetchMissions() {
    try {
        const response = await fetch(`${API_URL}/missions`);
        const missions = await response.json();
        displayMissions(missions);
    } catch (error) {
        console.error("Erreur lors de la récupération des missions:", error);
    }
}

function displayHeroes(heroes) {
    const container = document.getElementById("heroes-container");
    container.innerHTML = "";

    heroes.forEach(hero => {
        const heroElement = document.createElement("div");
        heroElement.innerHTML = `
            <h2>${hero.alias} (${hero.identity})</h2>
            <p><strong>Pouvoir :</strong> ${hero.power}</p>
            <p><strong>Date d'obtention du pouvoir :</strong> ${hero.powerDate}</p>
        `;
        container.appendChild(heroElement);
    });
}

function displayMissions(missions) {
    const container = document.getElementById("missions-container");
    container.innerHTML = ""; 

    missions.forEach(mission => {
        const missionElement = document.createElement("div");
        missionElement.innerHTML = `
            <h2>${mission.title}</h2>
            <p>${mission.description}</p>
        `;
        container.appendChild(missionElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchHeroes();
    fetchMissions();
});
