import { StatusBar } from "expo-status-bar";
import { Text, View, Dimensions, FlatList, Animated, Alert, Pressable} from "react-native";
import styles  from "../styles/Paymethod-style.js"
import { paymethodsuser} from "../utils/dataPM";
import { React, useState, useRef} from "react";
import Paymethod from "./Paymethod.js";

export default function Paymethodshome(props) {

    const [paymeths, setpaymeths] = useState(paymethodsuser);
    const width = Dimensions.get("screen").width;

    const deletepaymethod = async(idpaymeth) => {
        Alert.alert(" Eliminado ", " se elimino el metodo de pago.");
        //setpaymeths(await deleteTrip(idpaymeth));
      };

    return (
        <View style={styles.container}>
        <StatusBar style="light" />
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View>
          <Text style={styles.title}>🪙 Estos son tus metodos de pago 🏦</Text>
        </View>


        <Text>
        </Text>
        <Pressable style={styles.button} 
        onPress={() => props.navigation.navigate("NewPayMethods")} >
            <Text style={styles.text}>    💳 Agregar Nuevo metodo de pago   </Text>
        </Pressable>
        <Text>
        </Text>

        <View style={{  height: '85%'}}>
            <FlatList
            data={paymeths}
            keyExtractor={(_, index) => index}
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={true}
            renderItem={({ item, index }) => {
                return (
                <View style={{ width, ustifyContent: "center", alignItems: "center"}}>
                    <Paymethod
                    id={item.id}
                    owner={item.owner}
                    number={item.number}
                    type={item.type}
                    bank={item.bank}
                    expirationDate={item.expirationDate}
                    index={index}
                    contentButton={"ELIMINAR"}
                    functionOne={deletepaymethod}
                    ></Paymethod>
                </View>
                );
            }}
            >

            </FlatList>
            <Text></Text>

            
        </View>
      </View>
    )
      
};