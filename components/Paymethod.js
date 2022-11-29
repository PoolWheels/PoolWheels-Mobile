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
        <Modal animationType="slide" transparent={true} visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }} >
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.modalText}>
                👤 Dueño {props.owner}
              </Text>
              <Text style={stylesModal.modalText }>
                Typo de metodo de pago: {props.type}
              </Text>
              <Text style={stylesModal.modalText}>
              🔢 numero de metodo de pago{props.number}
              </Text>
              <Text style={stylesModal.modalText}>
              🏦 Banco {props.bank}
              </Text>
              <Text style={stylesModal.modalText}>
              📆 Fecha de Expiración: {props.expirationDate}
              </Text>
              <Pressable
                style={[stylesModal.button, stylesModal.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={stylesModal.textStyle}> X </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text>
        </Text>
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