import { React, useState} from "react";
import { Alert, Modal, View, Text, Pressable } from "react-native";
import styles from "../styles/trip";
import stylesModal from "../styles/modalstyle";

export default function Paymethod(props) {
    const formatStops = (stops) => {
        const arrayStops = [];

        for (let key in stops) {
        arrayStops.push([key, stops[key]]);
        }
        return arrayStops;
    };
    const[modalVisible, setModalVisible] = useState(false);

    return (
      <View style={styles.trip}>
        <Text style={styles.title}>  #{props.index + 1}</Text>
        <Text>

        </Text>
        
          <View >
            <View >
              <Text >
                👤 Dueño: {props.owner}
              </Text>
              <Text></Text>
              <Text style={stylesModal.modalText }>
                Typo de metodo de pago: {props.type}
              </Text>
              <Text style={stylesModal.modalText}>
              🔢 numero de metodo de pago:{props.number}
              </Text>
              <Text style={stylesModal.modalText}>
              🏦 Banco: {props.bank}
              </Text>
              <Text style={stylesModal.modalText}>
              📆 Fecha de Expiración: {props.expirationDate}
              </Text>
              <Text></Text>

            </View></View>
        <Pressable style={styles.button} onPress={(e) => {
            props.functionOne(props.id);
          }} content={props.contentButton}>

          <Text style={styles.text}>{props.contentButton}</Text>
        </Pressable>
        <Text>{"          "}</Text>
        <Text>
        </Text>
      </View>
    );


}