// Import function that returns a copy of the destinations and guests portion of the database
import { getDestinations, getGuests } from "./database.js";

// Invoke function that returns a copy of the guests portion of the database
const guests = getGuests();


// Define an event listener that displays a message about the destination that was clicked
document.addEventListener("click", (click) => {

    // Store info about what was clicked in this variable
    const clickTarget = click.target;

    // Check that a destination was clicked
    if (clickTarget.dataset.type === "destination") {

        // Declare a counter to keep track of guest numbers in the next step
        let counter = 0;

        // Iterate through the guests array to see how many guests are currently at the destination
        for (const guest of guests) {
            
            // Check that the guest is at the destination by comparing ids
            if (guest.destinationId === parseInt(clickTarget.dataset.id)) {
                // Add one to the counter
                counter++;
            }

        }
        
        // Display a message formatted for one person in the area
        if (counter === 1) {
            window.alert(`There is ${counter} guest in this area`)
        }
        // Display a message formatted for zero or many people in the area
        else {
            window.alert(`There are ${counter} guests in this area`);
        }

    }

})



// Define and export a function that formats info from the destinations portion of the database to be displayed in the index.html page
export const destinationsHTML = () => {

    // Declare a variable to begin building the list of destinations
    let htmlString = `<article class="destinationList">`;

    // Invoke function that returns the destinations portion of database
    const destinations = getDestinations();

    // Iterate through the first three destinations in the destinations array to display them in their proper geographic location
    for (let i = 2; i >= 0; i--) {
        // Display destination name in the html, assign each li's dataset a type of destination and id of the destination to be used in the event listener
        htmlString += `<div class="destinationCard">
        <figure class="destinationImg"><img src="${destinations[i].image}" alt="Photo of ${destinations[i].name}"></figure>
        <p class="destination" data-type="destination" data-id="${destinations[i].id}">${destinations[i].name}</p>
        </div>`;
    }
    // Iterate through the last three destinations in the destinations array to display them in their proper geographic location
    for (let i = 3; i <= 5; i++) {
        // Display destination name in the html, assign each li's dataset a type of destination and id of the destination to be used in the event listener
        htmlString += `<div class="destinationCard">
        <figure class="destinationImg"><img src="${destinations[i].image}" alt="Photo of ${destinations[i].name}"></figure>
        <p class="destination" data-type="destination" data-id="${destinations[i].id}">${destinations[i].name}</p>
        </div>`;
    }

    // Close the article being built in htmlString
    htmlString += `</article>`;

    // Return the formatted html info
    return htmlString;
}