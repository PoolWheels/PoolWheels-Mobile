import { StatusBar } from "expo-status-bar";
import { React, useState, useEffect } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { saveTrips, activeTrips, newTrip, deleteTrip } from "../utils/data";
import TripUserTraveler from "./TripUserTraveler";
import styles  from "../styles/hometrav-user"

export default function HomeTravelerUser() {
    const [trips, setTrips] = useState(saveTrips);    
    const width = Dimensions.get("screen").width;
    
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View>
          <Text style={styles.title}>Bienvenido Daniel 👋!</Text>
        </View>
        <FlatList
          data={trips}
          keyExtractor={(_,index) => index}
          horizontal={true}
          pagingEnabled
          renderItem={({ item,index }) => {
            return (
              <View
                style={{
                  width,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TripUserTraveler
                  index={index}
                  addrInit={item.addrInit}
                  availableSeats={item.availableSeats}
                  initTime={item.initTime}
                  stops={item.stops}
                  contentButton={"Eliminar Viaje"}
                  secondButton={true}
                  contentSecondButton={"PAGAR"}
                ></TripUserTraveler>
              </View>
            );
          }}
        ></FlatList>
        <Button title={"AGREGAR VIAJE"}></Button>
        <Text>  </Text>
      </View>
    );
};
  