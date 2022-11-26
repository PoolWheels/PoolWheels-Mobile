import { StatusBar } from "expo-status-bar";
import { React, useState, useRef} from "react";
import { Text, View, FlatList, Dimensions, Animated } from "react-native";
import { Button } from "react-native-elements";
import { saveTrips, deleteTrip } from "../utils/data";
import TripUserTraveler from "./TripUserTraveler";
import styles  from "../styles/hometrav-user"

export default function HomeTravelerUser() {
    const [trips, setTrips] = useState(saveTrips);    
    const width = Dimensions.get("screen").width;

    const deleteTripUser = async(idTrip) => {
      setTrips(await deleteTrip(idTrip));
      //alert(" VIAJE ELIMINADO " );
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
        <Button title={"AGREGAR VIAJE"}></Button>
        <Text> </Text>
        <Text> </Text>
      </View>
    );
};
  