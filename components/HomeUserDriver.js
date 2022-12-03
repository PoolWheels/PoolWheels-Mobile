import React from 'react'
import { View, Text, FlatList, Button, Dimensions } from 'react-native'
import {trips} from '../utils/dataTrips'
import styles from "../styles/hometrav-user";
import styles2 from "../styles/trip"

export default function HomeUserDriver(props) {
    
    const formatChildItems = (stops) => {
        const arrayStops = [];

        for (let key in stops) {
        arrayStops.push([key.replace(/_+/g, ' '), stops[key]]);
        }
        return arrayStops;
    };
    
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bienvenida Lorena 👋!</Text>
        </View>
        <View style={{ flex:1 }}>
          <FlatList
            data={trips}
            keyExtractor={(_, index) => index}
            horizontal={true}
            pagingEnabled
            extraData={trips}
            showsHorizontalScrollIndicator={true}
            renderItem={({ item: trip }) => (
              <View
                style={{
                  width: Dimensions.get("screen").width,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: 'center',
                  resizeMode: "cover",
                  borderRadius: 5,
                  marginBottom: 20,
                  borderWidth: 1.5,
                  borderColor: "rgb(27,74,255)",
                }}
              >
                <Text style={styles2.subtitles}>Punto de partida: {trip.addrInit}</Text>
                <Text style={styles2.subtitles}>Dirección de Destino: {trip.addrFin}</Text>
                <Text style={styles2.subtitles}>Puestos Disponibles: {trip.availableSeats}</Text>
                <Text style={styles2.subtitles}>Paradas:</Text>
                {formatChildItems(trip.stops).map((stop) => (
                  <Text style={styles2.hour}>
                    {"          "}
                    {stop[0] + ": " + stop[1]}
                  </Text>
                ))}
                {/* <Text>Pasajeros:</Text>
                {formatChildItems(trip.passengers).map((passengers) => (
                  <Text>
                    {"          "}
                    {passengers[0] + ": " + passengers[1]}
                  </Text>
                ))} */}
                <Text style={styles2.hour}>Hora de salida: {trip.finTime}</Text>
              </View>
            )}
          />
        </View>
        <Button
          title="Crear nuevo viaje"
          onPress={() => props.navigation.navigate("NewTripForm")}
        />
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button
            title="Metodos de pago"
            onPress={() => {
              props.navigation.navigate("PayMethods");
            }}
          />
          <Text>  </Text>
          <Button
            title="Soporte"
            onPress={() => {
              props.navigation.navigate("Soporte");
            }}
          />
        </View>
      </View>
    );
}
