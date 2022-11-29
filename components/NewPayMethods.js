import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { paymethodsuser} from "../utils/data";
import { Text, View, Dimensions, Animated, Alert, Pressable} from "react-native";
import styles  from "../styles/Paymethod-style.js"

export default function NewpaymethodsView() {
    const [newpaymeths, setnewpaymeths] = useState(paymethodsuser);
    const width = Dimensions.get("screen").width;


    return (
        <View style={styles.container}>
        <StatusBar style="light" />
        <View>
          <Text style={styles.title}>Agregar nuevo Metodo de pago 🛒</Text>
        </View>
        <Text> 

        <View>

        </View>

        </Text>
        <Pressable style={styles.button} onPress={() => console.log("intentando cancelar new paymethod")} >
          <Text style={styles.text}>    ❌ Cancelar   </Text>
        </Pressable>
        <Text> 

        </Text>
        <Text> 

        </Text>
      </View>
    );

}