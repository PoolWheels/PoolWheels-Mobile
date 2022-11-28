import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { paymethodsuser} from "../utils/data";
import { Text, View} from "react-native";
import styles  from "../styles/Paymethod-style.js"

export default function NewTripView() {

    

    return (
        <View>
          <Text style={styles.title}>new pay method</Text>
        </View>
    );

}