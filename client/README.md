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