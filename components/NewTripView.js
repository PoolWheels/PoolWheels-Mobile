import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { Text, View, FlatList, Dimensions,Animated, Alert, Pressable } from "react-native";
import { activeTrips, newSaveTrip } from "../utils/data";
import TripUserTraveler from "./TripUserTraveler";
import styles from "../styles/hometrav-user";

export default function NewTripView() {
    const width = Dimensions.get("screen").width;
    const [trips, setActiveTrips] = useState(activeTrips);    

    const saveNewTripUser = async (idTrip) => {
        setActiveTrips(await newSaveTrip(idTrip));
        Alert.alert(" AGREGADO ", " Ahora haces parte de este viaje!.");
    };

    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View>
          <Text style={styles.title}>VIAJES ACTIVOS 🛣️ </Text>
        </View>
        <FlatList
          data={trips}
          keyExtractor={(_, index) => index}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TripUserTraveler
                  id={item.id}
                  driver={item.driver}
                  index={index}
                  addrInit={item.addrInit}
                  availableSeats={item.availableSeats}
                  initTime={item.initTime}
                  stops={item.stops}
                  contentButton={"AGREGAR"}
                  functionOne={saveNewTripUser}
                  secondButton={false}
                ></TripUserTraveler>
              </View>
            );
          }}
        ></FlatList>
        <Text> </Text>
        <Pressable
          style={styles.button}
          onPress={() => console.log("Hola")}
        >
          <Text style={styles.text}>     REGRESAR    </Text>
        </Pressable>
        <Text> </Text>
        <Text> </Text>
      </View>
    );

}
