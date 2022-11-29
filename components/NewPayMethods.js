import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { paymethodsuser} from "../utils/data";
import { Text, View} from "react-native";
import styles  from "../styles/Paymethod-style.js"

export default function NewpaymethodsView() {
    const [newpaymeths, setnewpaymeths] = useState(paymethodsuser);
    const width = Dimensions.get("screen").width;


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Text style={styles.title}>new pay method</Text>
            </View>
        </View>
    );

}