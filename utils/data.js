const saveTrips = [
  {
    id: "015000",
    driver: {
      nombre: "David López",
      calificacion: "5.0",
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
      calificacion: "4.96",
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
      calificacion: "5.0",
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
      calificacion: "5.0",
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
      calificacion: "5.0",
      tel: "3112224090",
      modelCar: "Renault Logan Negro",
      placa: "ARM 124",
      calificacion: "4.9",
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
      calificacion: "5.0",
      tel: "3152342010",
      modelCar: "Bajaj CT100",
      placa: "AKR 124",
      calificacion: "4.8",
    },
    availableSeats: 1,
    initTime: "7:00",
    addrInit: "Centro Chia",
    stops: {
      ECI: "2000",
    },
  },
];

const newActiveTrip = (trip) =>{
  activeTrips.push(trip);
  return activeTrips;
}

const newSaveTrip = async (idTrip) => {
  for (let i = 0; i < activeTrips.length; i++) {
    if (activeTrips[i].id === idTrip) {
      //Save trip
      saveTrips.push(activeTrips[i]);
      //Delete from the active trips
      activeTrips.splice(i, 1);
      return activeTrips;
    }
  }   
}

const deleteTrip = async (idTrip) => {
  for (let i = 0; i < saveTrips.length; i++){
    if (saveTrips[i].id === idTrip){
      saveTrips.splice(i, 1);      
      newActiveTrip(saveTrips[i]);
      return saveTrips;
    } 
  }
}

export  {
  saveTrips,
  activeTrips,
  newSaveTrip,
  deleteTrip,
};