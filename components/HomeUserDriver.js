import React from 'react'
import { View, Text, FlatList, Button, Dimensions } from 'react-native'
import {trips} from '../utils/dataTrips'
import styles from "../styles/hometrav-user";

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
        <FlatList
          data={trips}
          keyExtractor={(_, index) => index}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          renderItem={({ item: trip }) => (
            <View
              style={{
                width: Dimensions.get("screen").width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Punto de partida: {trip.addrInit}</Text>
              <Text>Dirección de Destino: {trip.addrFin}</Text>
              <Text>Puestos Disponibles: {trip.availableSeats}</Text>
              <Text>Paradas:</Text>
              {formatChildItems(trip.stops).map((stop) => (
                <Text>
                  {"          "}
                  {stop[0] + ": " + stop[1]}
                </Text>
              ))}
              <Text>Pasajeros:</Text>
              {formatChildItems(trip.passengers).map((passengers) => (
                <Text>
                  {"          "}
                  {passengers[0] + ": " + passengers[1]}
                </Text>
              ))}
              <Text>Hora de salida: {trip.finTime}</Text>
            </View>
          )}
        />
        <Button
          style={styles.buttonOption}
          title="Crear nuevo viaje"
          onPress={() => props.navigation.navigate("NewTripForm")}
        />
        <View style={{ flexDirection: "row" }}>
          <Button
            style={styles.buttonOption}
            title="Metodos de pago"
            onPress={() => {
              props.navigation.navigate("PayMethods");
            }}
          />
          <Button
            style={styles.buttonOption}
            title="Soporte"
            onPress={() => {
              props.navigation.navigate("Soporte");
            }}
          />
        </View>
      </View>
    );
}
