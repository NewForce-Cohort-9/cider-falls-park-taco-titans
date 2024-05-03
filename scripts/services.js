import { getLocationServices, getServices, getDestinations } from "./database.js";

const services = getServices()
const locationServices = getLocationServices()
const destinations = getDestinations()

export const Services = () => {
    let html = "<ul>"

    for (const service of services) {
        html += `<li data-type="services" data-id="${service.id}">${service.name}</li>`
    }

    html += "</ul>"

    return html
}


//ADD EVENT LISTENER
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "services") {

          let serviceArray = []

            for (const locationService of locationServices) {
                if (locationService.serviceId === parseInt(itemClicked.dataset.id)) {
                    serviceArray.push(locationService)
                    
                }
            }

            let destinationArray = []

            for (const service of serviceArray) {
                for (const destination of destinations) {
                    if (service.destinationId === destination.id) {
                        destinationArray.push(destination.name)
                    }
                }
            }

            let message = ""

            // for (const destination of destinationArray) {
            //     message += destination
            // }


            //TO MAKE THE COMMAS AND "AND" IN THE WINDOW ALERT
            let counter = 0

            // Iterate through the bandList array to begin making the message
            for (const destination of destinationArray) {
                // Checks if this band is the last where at least 3 bands are booked for the venue
                if (counter === destinationArray.length - 1 && counter !== 0 && destinations.length >= 3) {
                    message += `, and ${destination}`
                }
                // Checks if this band is the last where there are only 2 bands booked for the venue
                else if (counter === destinationArray.length - 1 && counter !== 0) {
                    message += ` and ${destination}`
                }
                // Checks if this is the second through second to last band that booked the venue
                else if (counter < destinationArray.length - 1 && counter > 0) {
                    message += `, ${destination}`
                    counter++
                }
                // Otherwise this is the first band and add to the message variable with no formatting
                else {
                    message += destination
                    counter++
                }
            }

           return window.alert(`${itemClicked.innerText} is happening at ${message}`)
        }
    }
)



