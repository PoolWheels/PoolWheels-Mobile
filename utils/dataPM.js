const paymethodsuser = [
    {
      id: "635a05e0f91bdb6c08a11db4",
      type: "Debit",
      owner:  "634b051b464bb818bb2e611f",
      number: "1243-4567-8907-3456",
      bank: "Bancolombia",
      expirationDate: "07/27",
    },

    {
        id: "635ae2726ced815638534980",
        type: "VirtualWallet",
        owner:  "634b051b464bb818bb2e611f",
        number: "3153131214",
        bank: "Nequi",
        expirationDate: "05/12",
      },

      {
        id: "635ae06e6ced81563853497f",
        type: "Credit",
        owner:  "634b051b464bb818bb2e611f",
        number: "1234-5635-4568-4562",
        bank: "Falabella",
        expirationDate: "11/24",
      },
    
  ];

  const newActiveTrip = (trip) =>{
    activeTrips.push(trip);
    return activeTrips;
  }

  const newSavepaymeth = (idTrip) => {
    for (let i = 0; i < activeTrips.length; i++) {
      if (activeTrips[i].id === idTrip) {
        saveTrips.push(activeTrips[i]);
        activeTrips.splice(i, 1);
        return activeTrips;
      }
    }   
  }
  
  const deleteTrip = async  (idpaymeths) => {
    for (let i = 0; i < saveTrips.length; i++){
      if (saveTrips[i].id === idpaymeths){
        newActiveTrip(saveTrips[i]);
        saveTrips.splice(i, 1);
        return saveTrips;
      } 
    }
  }

  export  {
    paymethodsuser,
    deleteTrip,
  };