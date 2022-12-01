import { React, useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    ScrollView,
    TextInput,
    Button,
    Alert,
  } from "react-native";
import Contact from "../components/Contact";
  

  const LandingPage= () => {
   
    return (
      <View>
        <Text> Generar Ganancias</Text>
        <Text> Genera ganancias por viajes realizados. Organiza tus horarios y dispone de tu tiempo.</Text>
        <Text> Seguridad</Text>
        <Text> Transporte colectivo en un entorno común entre estudiantes universitarios y empleados.</Text>
        <Text> Opción de viaje</Text>
        <Text> Pide un viaje cuando lo necesites.</Text>
        <Button 
          title="contactar"
         />
      </View>
    );
  }

export default LandingPage;