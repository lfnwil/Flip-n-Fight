## Projet : Flip ‘n’ Fight

### Durée estimée : ~30 heures

## 🎓 Objectifs pédagogiques

- Mettre en œuvre un jeu fullstack avec logique de jeu tour par tour
- Utiliser un système de deckbuilding / collection de cartes
- Gérer une base de données relationnelle pour les comptes, decks et cartes
- Créer une interface utilisateur interactive avec React
- Travailler en équipe avec répartition des tâches front/back

### 👥 Joueurs : 2 (PvP local pour le MVP)

---

### 🔹 **Concept général**

FLIP ‘N’ FIGHT est un jeu de **combat stratégique en 1v1**, combinant des mécaniques de **jeu de mémoire** et de **deckbuilding**. Chaque joueur possède un **deck de cartes** influençant les effets déclenchés durant les parties de memory. 

Les joueurs s'affrontent à tour de rôle sur un plateau de memory. Les **paires retrouvées** permettent de déclencher des **actions de combat** (attaque, défense, soins, etc.) selon leur type. L’objectif est de réduire la vie de l’adversaire à 0.

---

## 🧩 Mécaniques de Combat

- **Tour par tour**, chronométré
- **1 essai par tour** (2 cartes à retourner seulement)
- Plateau de **memory 5x4** (20 cartes, 10 paires)
- Chaque paire correspond à un **effet de jeu** selon sa nature

### 📖 Types de cartes et effets associés

| Carte | Effet |
| --- | --- |
| 🔥 Flamme | Attaque l’adversaire |
| 🛡️ Bouclier | Ajoute de l’armure temporaire |
| 💊 Potion | Soigne le joueur |
| ⚡ Éclair | Active un pouvoir spécial du deck |
| 👿 Démon | Malus aléatoire (auto-dégâts, perte de carte, etc.) |
| 😇 Ange | Bonus aléatoire (carte supplémentaire, +heal, etc.) |

> Les effets peuvent être influencés par les cartes du deck du joueur.
> 

---

## 🧠 Fonctionnalités

### 🎴 **Deck & Cartes**

- **Deckbuilder** : chaque joueur construit son propre deck de 20 cartes ( 10 doublons )
- **Système de collection** : ouverture de boosters ou coffres pour obtenir de nouvelles cartes
- **Cartes à raretés variables** (commun, rare, épique, légendaire)
- **Deck limité à 20 cartes (10 doublons)** : Chaque joueur commence avec 10 doublons différents, pour un total de 20 cartes dans leur deck.
- **Modification du deck** : Les joueurs peuvent ajouter ou modifier les cartes de leur deck avant ou après chaque combat, mais le deck est figé pendant la durée du combat.

### ⚔️ **Système de Combat**

- Interface de duel (PvP local pour le MVP)
- Affichage en temps réel des :
    - PV des joueurs
    - Actions effectuées
    - Animations de combat (basique)
- Timer par tour (ex : 30 secondes)

### 📚 **Progression & Économie**

- Système de compte joueur (connexion / enregistrement)
- 20 cartes en tout
- Booster de 10 cartes offert au debut du jeu pour avoir un deck
- Gain 5 pièces après chaque combat  pour acheter des booster
- Achat de booster a 10 pièces, les boosters contiennent 3 cartes ( peu contenir des cartes deja obtenues ainsi que des doublons )

> Les doublons ne sont pas perdus et peuvent servir à l'amélioration des cartes dans les futures versions.
> 

| Rareté | couleur |
| --- | --- |
| Commun  | Gris |
| Rare | Bleu |
| Epique | Rouge |
| Légendaire  | Or |

---

## 🛠️ Stack technique

| Côté | Techno |
| --- | --- |
| **Frontend** | Vue.js (avec Vite)x |
| **Backend** | Node.js + Express |
| **Base de données** | SQLite3 |
| **Auth** | Sessions |
| **Temps réel** | Socket.io (plus tard) |

---

## 📋 MVP (Minimum Viable Product)

- PvP local en tour par tour (sur le même écran)
- Plateau de memory avec effets d’action
- Deck fixe par joueur (pré-défini pour commencer)
- Affichage des PV, actions, feedback visuel
- Récompense post-combat (monnaie)
- Page de gestion du deck simple

---

## 🚀 Evolutions

- Mode PvP en ligne (Socket.io + matchmaking)
- Prise en Charge mobile
- Parties classées et classement Elo
- Système de guildes / amis
- Boutique d’objets / monnaie in-game
- Animations poussées (attaque, pouvoir, etc.)
- Mode aventure solo
- Historique des duels et ratio victoires/défaites
- Niveaux des cartes