import { React, Alert } from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-elements";
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
        <Text style={styles.title}> VIAJE N°{props.index + 1}</Text>
        <Text></Text>
        <Text style={styles.subtitles}>
          {" "}
          PUNTO DE PARTIDA: {props.addrInit}
        </Text>
        <Text style={styles.subtitles}>
          {" "}
          PUESTOS DISPONIBLES: {props.availableSeats}
        </Text>
        <Text style={styles.hour}> HORA DE SALIDA: {props.initTime}</Text>
        <Text></Text>

        <Text style={styles.subtitles}> PARADAS PRINCIPALES:</Text>
        {formatStops(props.stops).map((stop, index) => (
          <Text key={index} style={styles.stops}>
            {"          "}
            {index + 1}. {stop[0] + ": $" + stop[1]}
          </Text>
        ))}

        <Text></Text>
        <Pressable
          style={styles.button}
          onPress={(e) => alert("Viaje eliminado.")}
          content={props.contentButton}
        >
          <Text style={styles.text}>{props.contentButton}</Text>
        </Pressable>

        <Text>{"          "}</Text>
        {props.secondButton ? (
          <Pressable
            style={styles.button}
            onPress={(e) =>
              alert(" VIAJE PAGADO ✔️ Recuerda Calificar a tu conductor. ")
            }
          >
            <Text style={styles.text}>{props.contentSecondButton}</Text>
          </Pressable>
        ) : (
          <Text></Text>
        )}
      </View>
    );


}
