import { getChamfortRiver } from "./database.js"

const chamfortRiver = getChamfortRiver()

export const chamfortRiver = () => {
    let html = "<ul>"

    for (const river of rivers) {
        html += `<li>${river.name}</li>`
    }

    html += "</ul>"

    return html
}
