import { getAttractions, getAttractionServices, getDestinations } from "./database.js";

const attractions = getAttractions()
const attractionServices = getAttractionServices()
const destinations = getDestinations()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "attraction") {
            for (const attractionService of attractionServices)
            if (parseInt(itemClicked.dataset.id) === attractionService.attractionId) {
                for (const destination of destinations) {
                    if (destination.id === attractionService.destinationId) {
                        window.alert(`The ${itemClicked.dataset.name} can be found at the ${destination.name}`)
                    }
                }
            }
        }
    }
)

export const attractionList = () => {
    let html = "<ul>"
    for (const attraction of attractions) {
        html += `<li data-type="attraction" data-id="${attraction.id}" data-name="${attraction.name}">${attraction.name}</li>`
    }
    html += "</ul>"
    return html
}