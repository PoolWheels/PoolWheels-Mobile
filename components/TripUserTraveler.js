import { React, Alert } from "react";
import { View, Text } from "react-native";
import { Card, Button} from "react-native-elements";
import styles from "../styles/trip";

export default function TripUserTraveler(props) {
    const formatStops = (stops) => {
        const arrayStops = [];

        for (let key in stops) {
        arrayStops.push([key, stops[key]]);
        }
        return arrayStops;
    };
    return (
      <View style={styles.trip}>
        <Text style={styles.title}> VIAJE {props.index + 1}</Text>
        <Text> PUNTO DE PARTIDA: {props.addrInit}</Text>
        <Text> PUESTOS DISPONIBLES: {props.availableSeats}</Text>
        <Text> HORA DE SALIDA: {props.initTime}</Text>
        <Text> PARADAS PRINCIPALES:</Text>
        {formatStops(props.stops).map((stop, index) => (
          <Text key={index}>
            {" "}
            {index + 1}. {stop[0] + ":  $ " + stop[1]}
          </Text>
        ))}
        <Button
          title={props.contentButton}
          onPress={(e) => alert("Viaje eliminado.")}
          content={props.contentButton}
        ></Button>
      </View>
    );


}
