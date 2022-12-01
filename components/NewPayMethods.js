import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import { paymethodsuser} from "../utils/dataPM";
import { Text, View, Dimensions, Button, Alert, Pressable, TextInput} from "react-native";
import styles  from "../styles/Paymethod-style.js"


export default function NewpaymethodsView(props) {
    const [newpaymeths, setnewpaymeths] = useState(paymethodsuser);
    const width = Dimensions.get("screen").width;

    const [owner, setowner] = useState("")
    const [bank, setbank] = useState("")
    const [number, setnumber] = useState("")
    const [expiretionDate, setexpirationDate] = useState("")
    const [type, settype] = useState("")

    const newPaymethodJSON = {
      id: newpaymeths.lenght + 1,
      owner: owner,
      type: type,
      bank: bank,
      number: number,
      expirationDate : expiretionDate,
  }

    return (
        <View>
        <StatusBar style="light" />
        <View>
          <Text style={styles.title}>Agregar nuevo Metodo de pago 🛒</Text>
        </View>
        <Text></Text>
        <Text></Text>
        <View style={{ alignItems:'center' }}>
            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> Dueño: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='Nombre y apellido'
                    onChangeText={(newAdd) => {
                        setowner(newAdd)
                    }}
                    value={owner}
                />
            </View>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> tipo de metodo de pago : </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='Debit, Credit, virtualWallet'
                    onChangeText={(newAdd) => {
                        settype(newAdd)
                    }}
                    value={type}
                />
            </View>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> banco o entidad: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='banco o entidad financiera'
                    onChangeText={(seats) => {
                        setbank(seats)
                    }}
                    value={bank}
                />
            </View>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> numero de metodo de pago: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='Tarjeta, Nequi o Daviplata'
                    onChangeText={(time) => {
                        setnumber(time)
                    }}
                    value={number}
                />
            </View>
            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> fecha de expiracion: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='01/20'
                    onChangeText={(time) => {
                        setexpirationDate(time)
                    }}
                    value={expiretionDate}
                />
            </View>

            <Text></Text>

            <Button
                style={styles.button}
                title='Guardar metodo de pago'
                onPress = {() => {
                    Alert.alert('Se ha agregado correctamente su metodo de pago')
                    props.navigation.navigate("PayMethods")
                }}
            />
            <Button
                style={styles.button}
                title='❌ Cancelar'
                onPress = {() => {
                    Alert.alert('Cancelado correctamente')
                    props.navigation.navigate("PayMethods")
                }}
            />
        </View>
        <Text> </Text>
      </View>
    );

}