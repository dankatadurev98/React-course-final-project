# Gaming Store SPA 

## Project Description
This project is a Single Page Application (SPA) built with **React**, representing a gaming store platform.  
Guests can browse games and view details, while authenticated users can create, edit, delete, and manage their own games.

The application uses **client-side routing**, **authentication**, and **RESTful API communication** with a backend service.

---

## Public Part (Guest Users)
- Home page
- About page
- Contacts page
- Catalog (list of all games)
- Game Details
- Login
- Register

Guests can view games but cannot create, edit, or delete records.

---

## Private Part (Authenticated Users)
- Add Game
- Edit Game (only for the owner)
- Delete Game (only for the owner)
- My Games (list of games created by the logged-in user)
- Logout

---

## Dynamic Pages
The application contains more than 4 dynamic pages:
1. **Catalog** – displays all games fetched from the server
2. **Game Details** – displays detailed information for a selected game
3. **Add Game** – form for creating new games
4. **Edit Game** – form for editing existing games
5. **My Games** – personalized page showing games created by the logged-in user

---

## Project Architecture

src/
├── components/
│ ├── home/
│ ├── catalog/
│ ├── details/
│ ├── addGame/
│ ├── editGame/
│ ├── myGames/
│ └── common/
│ └── OneCard.jsx
│
├── context/
│ └── authContext.jsx
│
├── hooks/
│ └── useLocalStorage.js
│
├── requests/
│ └── requests.js
│
├── App.jsx
└── main.jsx


Games to use for testing :



Title : Dota2
Genre : Multiplayer Online Battle Arena 
Price : 0
Image URL : https://www.esportconnect.de/wp-content/uploads/2024/02/dora-2-cover.jpg
Release Date :  09.07.2013
Summary : Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.



Title : Counter-Strike 2
Genre : First Person Shooter
Price : 0
Image URL : https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/CS2_Cover_Art.jpg/250px-CS2_Cover_Art.jpg
Release Date : 27.09.2023
Summary : Counter-Strike 2 is a 2023 free-to-play tactical first-person shooter game developed and published by Valve. It is the fifth entry in the Counter-Strike series, developed as an updated version of the previous entry, Counter-Strike: Global Offensive.



Title : PUBG:Players Unknown Battleground
Genre : Battle Royal
Price : 30
Image URL : https://www.gamespot.com/a/uploads/scale_medium/1576/15769789/3246445-imagepu.jpg
Release Date : 23.03.2017
Summary : PUBG: Battlegrounds is a 2017 battle royale video game published by Krafton, and developed by Krafton's PUBG Studios. 



Title : Grand Theft Auto VI
Genre : Action-Adventure Game
Price : 100
Image URL : https://static.wikitide.net/fictionwiki/c/c6/Grand-theft-auto-vi-gta-6-smartcdkeys-cheap-cd-key-cover.jpg
Release Date : 19.11.2026
Summary : Grand Theft Auto VI is an upcoming action-adventure game developed and published by Rockstar Games. It is due to be the eighth main Grand Theft Auto game, following Grand Theft Auto V, and the sixteenth entry overall.