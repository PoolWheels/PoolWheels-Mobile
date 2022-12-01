import { StatusBar } from "expo-status-bar";
import { React, useState, useRef} from "react";
import { Text, View, FlatList, Dimensions, Animated, Alert, Pressable } from "react-native";
import { saveTrips, deleteTrip } from "../utils/data";
import TripUserTraveler from "./TripUserTraveler";
import styles  from "../styles/hometrav-user"

export default function HomeTravelerUser(props) {
    const [trips, setTrips] = useState(saveTrips);  
    const width = Dimensions.get("screen").width;
    
    const deleteTripUser = async (idTrip) => {
      Alert.alert(" ELIMINADO ", " Ya no haces parte de este viaje.");
      setTrips(await deleteTrip(idTrip));
    };

    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View>
          <Text style={styles.title}>Bienvenido David 👋!</Text>
        </View>
        <FlatList
          data={trips}
          keyExtractor={(_, index) => index}
          horizontal={true}
          pagingEnabled
          extraData={trips}
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
                  contentButton={"ELIMINAR"}
                  functionOne={deleteTripUser}
                  secondButton={true}
                  contentSecondButton={"PAGAR"}
                ></TripUserTraveler>
              </View>
            );
          }}
        ></FlatList>
        <Text> </Text>

        <Text> </Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={styles.buttonOption}
            onPress={() => props.navigation.navigate("PayMethods")}
          >
            <Text style={styles.text}> Métodos de Pago ➜ </Text>
          </Pressable>
          <Pressable
            style={styles.buttonOption}
            onPress={() => props.navigation.navigate("Soporte")}
          >
            <Text style={styles.text}> Soporte y PQR ➜ </Text>
          </Pressable>
        </View>
        <Text></Text>
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.navigate("NewTripView")}
        >
          <Text style={styles.text}> AGREGAR VIAJE </Text>
        </Pressable>

        <Text> </Text>

        <Text> </Text>
        <Text> </Text>
      </View>
    );
};
  