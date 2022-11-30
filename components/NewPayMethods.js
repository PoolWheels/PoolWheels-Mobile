import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { paymethodsuser} from "../utils/dataPM";
import { Text, View, Dimensions, Animated, Alert, Pressable} from "react-native";
import styles  from "../styles/Paymethod-style.js"

export default function NewpaymethodsView(props) {
    const [newpaymeths, setnewpaymeths] = useState(paymethodsuser);
    const width = Dimensions.get("screen").width;


    return (
        <View>
        <StatusBar style="light" />
        <View>
          <Text style={styles.title}>Agregar nuevo Metodo de pago 🛒</Text>
        </View>
        <Text> </Text>
        <Pressable style={styles.button} onPress={() => props.navigation.navigate("Metodos de Pago")} >
          <Text style={styles.text}>    ❌ Cancelar   </Text>
        </Pressable>
        <Text> </Text>
      </View>
    );

}