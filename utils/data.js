const saveTrips = [
  {
    id: "015000",
    driver: {
      nombre: "David López",
      tel: "3209876756",
      modelCar: "Chevrolet Corsa Plateado",
      placa: "BTR 161",
    },
    availableSeats: 3,
    initTime: "13:00",
    addrInit: "CC Centro Chia",
    stops: { "U San Buevaventura": "6000", SantaFe: "4000", ECI: "2000" },
  },
  {
    id: "016000",
    driver: {
      nombre: "Lorena Ardila",
      tel: "3209034561",
      modelCar: "Renault Logan Negro",
      placa: "ACM 161",
    },
    availableSeats: 2,
    initTime: "11:00",
    addrInit: "Zipaquira Centro",
    stops: { "Cc Fontanar": "2000", CentroChia: "4000", ECI: "6000" },
  },
  {
    id: "017000",
    driver: {
      nombre: "Manolo Caro",
      tel: "3134236090",
      modelCar: "Renault Logan Rojo",
      placa: "KRG 234",
    },
    availableSeats: 3,
    initTime: "6:00",
    addrInit: "Chia Centro",
    stops: { UDCA: "2000", ECCI: "4000", UNIAGRARIA: "6000" },
  },
];

const activeTrips = [
  {
    id: "018000",
    driver: {
      nombre: "Manolo Caro",
      tel: "3134236090",
      modelCar: "Renault Logan Rojo",
      placa: "KRG 234",
    },
    availableSeats: 2,
    initTime: "7:00",
    addrInit: "Centro Chia",
    stops: { UDCA: "2000", ECCI: "4000", UNIAGRARIA: "6000" },
  },
  {
    id: "019000",
    driver: {
      nombre: "Laura Franco",
      tel: "3112224090",
      modelCar: "Renault Logan Negro",
      placa: "ARM 124",
    },
    availableSeats: 3,
    initTime: "7:00",
    addrInit: "Iglesia de Bojaca",
    stops: {
      "Universidad de la Sabana": "2000",
      ECCI: "4000",
      UNIAGRARIA: "6000",
    },
  },
  {
    id: "020000",
    driver: {
      nombre: "Saul Mendez",
      tel: "3152342010",
      modelCar: "Bajaj CT100",
      placa: "AKR 124",
    },
    availableSeats: 1,
    initTime: "7:00",
    addrInit: "Centro Chia",
    stops: {
      ECI: "2000",
    },
  },
];

const newTrip = (trip) => {
    saveTrips.push(trip);
    deleteTrip(trip);
    return saveTrips    
}

const deleteTrip = (trip) => {
    saveTrips.pop(trip);
    return saveTrips
}

export  {
  saveTrips,
  activeTrips,
  newTrip,
  deleteTrip,
};