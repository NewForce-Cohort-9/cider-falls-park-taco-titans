const database = {
    destinations: [
        {
            id: 1,
            name: "Chamfort River",
            location: "Northeast",
            image: "https://t3.ftcdn.net/jpg/01/13/46/78/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            location: "North",
            image: "https://www.travelandleisure.com/thmb/juPgMzQuYkcjfVHWVwdoGxZkDoE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-tour-du-mont-blanc-WORLDHIKES0523-ecb102509c2e47b18b8cdd6aec848db2.jpg"
        },
        {
            id: 3,
            name: "Lodge",
            location: "Northwest",
            image: "https://media.cntraveler.com/photos/61ee406bfe18edcbd885cb51/16:9/w_2560,c_limit/WhitefaceLodge-Lake-Placid-NY.jpg"
        },
        {
            id: 4,
            name: "Gander River",
            location: "Southwest",
            image: "https://cdn.pixabay.com/photo/2020/05/04/16/05/mckenzie-river-5129717_640.jpg"
        },
        {
            id: 5,
            name: "Campgrounds",
            location: "South",
            image: "https://www.nps.gov/grte/planyourvisit/images/JLCG_tents_Teewinot_2008_mattson_1.JPG?maxwidth=1300&maxheight=1300&autorotate=false"
        },
        {
            id: 6,
            name: "Pine Bluff Trails",
            location: "Southeast",
            image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?cs=srgb&dl=pexels-andreimike-1271619.jpg&fm=jpg"
        }
    ],
    guests: [
        {
            id: 1, 
            name: "Colonel Mustard",
            weapon: "knife",
            destinationId: 1
        },
        {
            id: 2, 
            name: "Professor Plum",
            weapon: "candlestick",
            destinationId: 2
        },
        {
            id: 3, 
            name: "Mrs. White",
            weapon: "wrench",
            destinationId: 3
        },
        {
            id: 4, 
            name: "Ms. Scarlett",
            weapon: "lead pipe",
            destinationId: 4
        },
        {
            id: 5, 
            name: "Reverend Green",
            weapon: "dagger",
            destinationId: 5
        },
        {
            id: 6, 
            name: "Mrs. Peach",
            weapon: "revolver",
            destinationId: 6
        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        },
        {
            id: 2,
            name: "Canoeing"
        },
        {
            id: 3,
            name: "Fishing"
        },
        {
            id: 4,
            name: "Hiking"
        },
        {
            id: 5,
            name: "Picnicking"
        },
        {
            id: 6,
            name: "Rock Climbing"
        },
        {
            id: 7,
            name: "Lodging"
        },
        {
            id: 8,
            name: "Parking"
        },
        {
            id: 9,
            name: "Information"
        },
        {
            id: 10,
            name: "Zip Lines"
        }
    ],
    locationServices: [
        {
            id: 1,
            destinationId: 1,
            serviceId: 1
        },
        {
            id: 2,
            destinationId: 1,
            serviceId: 2
        },
        {
            id: 3,
            destinationId: 1,
            serviceId: 3
        },
        {
            id: 4,
            destinationId: 2,
            serviceId: 4
        },
        {
            id: 5,
            destinationId: 2,
            serviceId: 5
        },
        {
            id: 6,
            destinationId: 2,
            serviceId: 6
        },
        {
            id: 7,
            destinationId: 3,
            serviceId: 7
        },
        {
            id: 8,
            destinationId: 3,
            serviceId: 8
        },
        {
            id: 9,
            destinationId: 3,
            serviceId: 9
        },
        {
            id: 10,
            destinationId: 3,
            serviceId: 5
        },
        {
            id: 11,
            destinationId: 4,
            serviceId: 3
        },
        {
            id: 12,
            destinationId: 4,
            serviceId: 4
        },
        {
            id: 13,
            destinationId: 5,
            serviceId: 9
        },
        {
            id: 14,
            destinationId: 5,
            serviceId: 7
        },
        {
            id: 15,
            destinationId: 5,
            serviceId: 8
        },
        {
            id: 16,
            destinationId: 6,
            serviceId: 4
        },
        {
            id: 17,
            destinationId: 6,
            serviceId: 5
        },
        {
            id: 18,
            destinationId: 6,
            serviceId: 10
        }
    ],
    attractions: [
        {
            id: 1,
            name: "Hotel"
        },
        {
            id: 2,
            name: "Restaurant"
        },
        {
            id: 3,
            name: "Office Park"
        },
        {
            id: 4,
            name: "Children Play Areas"
        },
        {
            id: 5,
            name: "Food Vendors"
        }
    ],
    attractionServices: [
        {
            id: 1,
            destinationId: 3,
            attractionId: 1,
            mainAttraction: false
        },
        {
            id: 2,
            destinationId: 3,
            attractionId: 2,
            mainAttraction: false
        },
        {
            id: 3,
            destinationId: 5,
            attractionId: 3,
            mainAttraction: true
        },
        {
            id: 4,
            destinationId: 5,
            attractionId: 4,
            mainAttraction: false
        },
        {
            id: 5,
            destinationId: 6,
            attractionId: 5,
            mainAttraction: false
        }
    ]
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}));
}

export const getDestinations = () => {
    return database.destinations.map(destinations => ({...destinations}));
}

export const getServices = () => {
    return database.services.map(services => ({...services}));
}

export const getLocationServices = () => {
    return database.locationServices.map(locationServices => ({...locationServices}));
}

export const getAttractions = () => {
    return database.attractions.map(attractions => ({...attractions}));
}

export const getAttractionServices = () => {
    return database.attractionServices.map(attractionServices => ({...attractionServices}));
}