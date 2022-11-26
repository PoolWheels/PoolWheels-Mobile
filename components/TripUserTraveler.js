import { React, useState} from "react";
import { Alert, Modal, View, Text, Pressable } from "react-native";
import styles from "../styles/trip";
import stylesModal from "../styles/modalstyle";

export default function TripUserTraveler(props) {
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
        <Text style={styles.title}> VIAJE N°{props.index + 1}</Text>
        <Text></Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
              <Text style={stylesModal.modalText}>
                👤 {props.driver.nombre}
              </Text>
              <Text style={stylesModal.modalText }>
                Calificación: {props.driver.calificacion}
              </Text>
              <Text style={stylesModal.modalText}>
                📱 TEL: {props.driver.tel}
              </Text>
              <Text style={stylesModal.modalText}>
                Vehículo: {props.driver.modelCar}
              </Text>
              <Text style={stylesModal.modalText}>
                PLACA: {props.driver.placa}
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
        <Pressable
          style={[stylesModal.button, stylesModal.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={stylesModal.textStyle}> 🚦 INFO CONDUCTOR</Text>
        </Pressable>
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
          onPress={(e) => {
            props.functionOne(props.id);
          }}
          content={props.contentButton}
        >
          <Text style={styles.text}>{props.contentButton}</Text>
        </Pressable>

        <Text>{"          "}</Text>
        {props.secondButton ? (
          <Pressable
            style={styles.secondButton}
            onPress={(e) =>
              Alert.alert(" VIAJE PAGADO ✔️", "Recuerda calificar a tu conductor. ")
            }
          >
            <Text style={styles.text}>{props.contentSecondButton}</Text>
          </Pressable>
        ) : (
          <Text></Text>
        )}
        <Text></Text>
      </View>
    );


}
