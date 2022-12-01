const trips = [
    {
        id: 1,
        addrInit: 'CC Centro Mayor',
        addrFin: 'ECI',
        availableSeats: 0,
        stops: {
            Calle_45_Av_Mutis: '$2000',
            Stop2: '$5000',
            Stop_3: '$7000'
        },
        passengers: {
            p1: 'David',
            p2: 'Diego',
            p3: 'Zuly'
        },
        finTime: '15:30',
        active: true
    },
    {
        id: 2,
        addrInit: 'Portal 80',
        addrFin: 'ECI',
        availableSeats: 1,
        stops: {
            Stop1: "$2000",
            Stop2: "$5000"
        },
        passengers : {
            p1: 'Deivid',
            p2: 'Eduardo',
        },
        finTime: '11:30',
        active: true
    }
]

const saveNewTrip = (trip) => {
    trips.push(trip);
    return trips;
}

export {
    trips,
    saveNewTrip
}