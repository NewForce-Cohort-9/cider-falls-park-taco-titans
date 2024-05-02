const database = {
    parkAreas: [
        {
            id: 1,
            name: "Chamfort River",
            location: "Northeast",
            attraction: "River"
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            location: "North",
            attraction: "Trail"
        },
        {
            id: 3,
            name: "Lodge",
            location: "Northwest",
            attraction: ["Lodge", "Hotel", "Restaurant"]
        },
        {
            id: 4,
            name: "Gander River",
            location: "Southwest",
            attraction: "Nature Preserve"
        },
        {
            id: 5,
            name: "Campgrounds",
            location: "South",
            attraction: ["Campgrounds", "Office Park", "Children Play Area"]
        },
        {
            id: 6,
            name: "Pine Bluff Trails",
            location: "Southeast",
            attractions: ["Trails", "Food Vendors"]
        }
    ],
    guests: [
        {
            id: 1, 
            name: "Colonel Mustard",
            areaId: 1
        },
        {
            id: 2, 
            name: "Professor Plum",
            areaId: 2
        },
        {
            id: 3, 
            name: "Mrs. White",
            areaId: 3
        },
        {
            id: 4, 
            name: "Ms. Scarlett",
            areaId: 4
        },
        {
            id: 5, 
            name: "Reverend Green",
            areaId: 5
        },
        {
            id: 6, 
            name: "Mrs. Peach",
            areaId: 6
        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting",
            areaId: 1
        },
        {
            id: 2,
            name: "Canoeing",
            areaId: 1
        },
        {
            id: 3,
            name: "Fishing",
            areaId: [1, 4]
        },
        {
            id: 4,
            name: "Hiking",
            areaId: [2, 4, 6]
        },
        {
            id: 5,
            name: "Picnicking",
            areaId: [2, 3, 6]
        },
        {
            id: 6,
            name: "Rock Climbing",
            areaId: 2 
        },
        {
            id: 7,
            name: "Lodging",
            areaId: [3, 5]
        },
        {
            id: 8,
            name: "Parking",
            areaId: [3, 5]
        },
        {
            id: 9,
            name: "Information",
            areaId: [3, 5]
        },
        {
            id: 10,
            name: "Zip Lines",
            areaId: 6
        }
    ]
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}));
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkAreas => ({...parkAreas}));
}

export const getServices = () => {
    return database.services.map(services => ({...services}));
}