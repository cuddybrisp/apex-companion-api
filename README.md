# Apex Legends Companion
An app used to keep track of your game data all in one spot.
## Setup Steps for front-end React application
1. Fork and Clone this repository.
2. Rename the cloned repo.
3. 'cd' into the newly renamed cloned repo.
4. Run NPM install.
5. Run 'npx create-react-app <my-app>'
6. npm start
## Important Links
- [Deployed Api]
- [Api Repo](https://github.com/cuddybrisp/apex-companion-api)
- [Deployed Client]
## Planning
  I had been thinking of the idea to have something to keep track of my Apex data while I was realizing how much I was playing it..
  Wanted something that might resemble the menu screen

---
## User Stories
1. User must be able to create a new game with a legend
2. User must be able to update a game
3. User must be able to delete a game
4. User must be able to view a single or multiple games.
5. User must be able to create a new game.
6. User must be able to sign up.
7. User must be able to sign in.
8. User must be able to change password.
9. User must be able to sign out.
## Technologies Used
- Node js
- React js
- Javascript
- HTML
- CSS/Sass
- Express
- MongoDB
## Catalog of Routes
Verb         |	URI Pattern
------------ | -------------
GET | /legends
DELETE | /legends/:id
GET | /games
POST | /games
PATCH | /games/:id
DELETE | /games/:id
GET | /sign-in
POST | /sign-up
PATCH | /change-pw
DELETE | /sign-out
## Unsolved Problems
- Still need to...achieve the drop down/ collapse
- Would eventually like to...allow video to be uploaded by user, possibly add more games as a series
#### Wireframes:
[App V1](https://imgur.com/14Ov2oK)
#### ERD:
[ERD](https://imgur.com/mGCmQma)
