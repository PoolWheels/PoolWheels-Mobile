const dataUsers = [
  {
    id: 1,
    name: "David",
    lastname: "López",
    email: "davidlopez@mail.escuelaing.edu.co",
    password: "david1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3209876756",
    rol: "DRIVER",
    document: "",
    photoCar: "",
    modelCar: "Chevrolet Corsa Plateado",
    plate: "BTR 161",
  },
  {
    id: 2,
    name: "Lorena",
    lastname: "Ardila",
    email: "lorenaardila@mail.escuelaing.edu.co",
    password: "lorena1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3209034561",
    rol: "DRIVER",
    document: "",
    photoCar: "",
    modelCar: "Renault Logan Negro",
    plate: "ACM 161",
  },
  {
    id: 3,
    name: "Manolo",
    lastname: "Caro",
    email: "manolocaro@mail.escuelaing.edu.co",
    password: "manolo1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3134236090",
    rol: "DRIVER",
    document: "",
    photoCar: "",
    modelCar: "Renault Logan Rojo",
    plate: "KRG 234",
  },
  {
    id: 4,
    name: "Laura",
    lastname: "Franco",
    email: "laurafranco@mail.escuelaing.edu.co",
    password: "laura1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3112224090",
    rol: "DRIVER",
    document: "",
    photoCar: "",
    modelCar: "Renault Logan Negro",
    plate: "ARM 124",
  },
  {
    id: 5,
    name: "Saul",
    lastname: "Mendez",
    email: "saulmendez@mail.escuelaing.edu.co",
    password: "saul1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3152342010",
    rol: "DRIVER",
    document: "",
    photoCar: "",
    modelCar: "Bajaj CT100",
    plate: "AKR 124",
  },
  {
    id: 6,
    name: "David",
    lastname: "Diaz",
    email: "daviddiaz@mail.escuelaing.edu.co",
    password: "david1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3212345678",
    rol: "TRAVELER",
    payMethods: [],
  },
  {
    id: 7,
    name: "Diego",
    lastname: "Gonzáles",
    email: "diegogonzales@mail.escuelaing.edu.co",
    password: "diego1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3121232456",
    rol: "TRAVELER",
    payMethods: [],
  },
  {
    id: 8,
    name: "Zuly",
    lastname: "Vargas",
    email: "zulyvargas@mail.escuelaing.edu.co",
    password: "zuly1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3214567532",
    rol: "TRAVELER",
    payMethods: [],
  },
  {
    id: 9,
    name: "Deivid",
    lastname: "Rativa",
    email: "deividrativa@mail.escuelaing.edu.co",
    password: "deivid1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3235678642",
    rol: "TRAVELER",
    payMethods: [],
  },
  {
    id: 10,
    name: "Eduardo",
    lastname: "Ospina",
    email: "eduardoospina@mail.escuelaing.edu.co",
    password: "eduardo1234",
    university: "Escuela Colombiana de ingeniría",
    phone: "3431267899",
    rol: "TRAVELER",
    payMethods: [],
  },
];

const verificarCredenciales = (email, password) => {
  for (let i = 0; i < dataUsers.length; i++) {
    if (email === dataUsers[i].email && password === dataUsers[i].password) {
      return true;
    }
  }
  return false;
};

const obtenerRol = (email) => {
  for (let i = 0; i < dataUsers.length; i++) {
    if (email === dataUsers[i].email) {
      return dataUsers[i].rol;
    }
  }
};

export { verificarCredenciales, obtenerRol };
