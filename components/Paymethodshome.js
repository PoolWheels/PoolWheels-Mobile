import { StatusBar } from "expo-status-bar";
import { Text, View, Dimensions} from "react-native";
import styles  from "../styles/Paymethod-style.js"
import { paymethodsuser} from "../utils/data";
import { React, useState, useRef} from "react";

export default function Paymethodshome() {

    const [paymeths, setpaymeths] = useState(paymethodsuser);
    const width = Dimensions.get("screen").width;


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Text style={styles.title}>Your PayMethods</Text>
            </View>
        </View>
    )
      
};