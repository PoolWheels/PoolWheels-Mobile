import { StatusBar } from "expo-status-bar";
import { Text, View, Dimensions, FlatList, Animated, Alert, Pressable} from "react-native";
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
          <Text style={styles.title}>🪙 Estos son tus metodos de pago 🏦</Text>
        </View>
        <FlatList
          data={paymeths}
          keyExtractor={(_, index) => index}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          renderItem={({ item, index }) => {
            return (
              <View style={{ width, ustifyContent: "center", alignItems: "center", }}>
                
              </View>
            );
          }}
        >

        </FlatList>
        <Text> 

        </Text>
        <Pressable style={styles.button} onPress={() => console.log("intentando crear nuevo paymethod")} >
          <Text style={styles.text}>    💳 Agregar Nuevo metodo de pago   </Text>
        </Pressable>
        <Text> 

        </Text>
        <Text> 

        </Text>
      </View>
    )
      
};