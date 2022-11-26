
const saveTrips = [
    {},
    {},
    {},
    {},
    {},
]

const activeTrips = [
    {},
    {},
    {},
    {},
    {},
]

const newTrip = (trip) => {
    saveTrips.push(trip);
    return saveTrips    
}

const deleteTrip = (trip) => {
    saveTrips.pop(trip);
    return saveTrips
}