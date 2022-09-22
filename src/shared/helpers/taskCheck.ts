/* eslint-disable no-console */
console.log(`
Task: 190/190
1. Basic structure:
   - (+5) Two pages: "Garage" and "Winners".
   - (+5) "Garage" contains: name, page number, and the full amount of items in the database.
   - (+5) "Winners" contains: its name, page number, and the full amount of items in the database.
   - (+10) View state should be saved when user switches from one view to another. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.
2. "Garage" view:
   - (+15) Features: create, update and delete a car. Car attributes: "name" and "color". Delete button removes a car from "garage" and "winners".
   - (+10) Color picker from an RGB-Palete updates/create a car with a chosen color.
   - (+5) Near the car's picture there are buttons to update its attributes or delete it.
   - (+10) Pagination (7 cars per one page).
   - (+10) Create random cars button (100 cars per click). Name should be assembled from two random parts, color and name generated randomly.
3. Car animation:
   - (+5) Car's picture has starting / stoping the car engine buttons.
   - (+20) User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
   - (+5) User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
   - (+5) Start engine button is disabled in case car is already in driving mode. stop engine button is disabled when car is on it's initial place.
   - (+15) Car animation should work fine on any screen (smallest screen size is 500px).
4. Race animation:
   - (+10) Button to start race. After click all the cars on the current page start driving.
   - (+10) Button to reset race. After click all the cars return to it's initial places.
   - (+10) Message with winner when the first car finishes the race.
5. "Winners" view:
   - (+10) After some car wins it should be displayed at the "Winners view" table.
   - (+5) Pagination (10 winners per one page).
   - (+10) Table should includes: "№", "Image of the car", "Name of the car", "Wins number", "Best time in seconds". If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
   - (+10) Sort cars by wins number and by best time (ASC, DESC).
  `);

export {};
