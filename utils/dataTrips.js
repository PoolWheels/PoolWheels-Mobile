const trips = [
    {
        id: 1,
        addrInit: 'CC Centro Mayor',
        addrFin: 'ECI',
        availableSeats: 0,
        stops: {
            Calle_45_Av_Mutis: '$2000',
            Av_68_Calle_80: '$5000',
            Calle_170: '$7000'
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