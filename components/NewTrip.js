import React, {useState} from 'react'
import Constants from 'expo-constants'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { trips, saveNewTrip } from '../utils/dataTrips'

export default function NewTrip(props) {

    const prices = [
        {value: '$2000'},
        {value: '$4000'},
        {value: '$7000'}
    ]

    const [addrInit, setAddInit] = useState("");
    const [addrFin, setAddFin] = useState("");
    const [availableSeats, setAvailSeats] = useState("");
    const [finTime, setFinTime] = useState("");
    const [stop1, setStopOne] = useState("");
    const [stop2, setStopTwo] = useState("");
    const [stop3, setStopThree] = useState("");
    const [price1, setPriceOne] = useState("$2000");
    const [price2, setPriceTwo] = useState("$2000");
    const [price3, setPriceThree] = useState("$2000");

    const stopsSelected = {}
    function addStops() {
        stopsSelected[stop1] = price1;
        stopsSelected[stop2] = price2;
        stopsSelected[stop3] = price3;
    }

    const newTripJSON = {
        id: trips.length + 1,
        addrInit: addrInit,
        addrFin: addrFin,
        availableSeats: availableSeats,
        stops: stopsSelected,
        passengers : {},
        finTime: finTime,
        active: true
    }

    return (
        <View style={{ alignItems:'center' }}>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> Punto de partida: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='CC Santa Fe'
                    onChangeText={(newAdd) => {
                        setAddInit(newAdd)
                    }}
                    value={addrInit}
                />
            </View>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> Dirección de Destino: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='Universidad de la Sabana'
                    onChangeText={(newAdd) => {
                        setAddFin(newAdd)
                    }}
                    value={addrFin}
                />
            </View>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> Puestos Disponibles: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='Puestos'
                    onChangeText={(seats) => {
                        setAvailSeats(seats)
                    }}
                    value={availableSeats}
                />
            </View>

            <View style={{ marginVertical:10, alignItems: 'center' }}>
                <Text style={{marginBottom:10}}> Paradas: </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text> Parada 1: </Text>
                    <TextInput
                        style={{height: 25,
                            borderWidth: 1,
                            paddingHorizontal: 15}}
                        placeholder='Calle 80 con Av. 68'
                        onChangeText={(stop1) => {
                            setStopOne(stop1.replace(/ /g, '_'))
                        }}
                        value={stop1}
                    />
                    <Text> Precio: </Text>
                    <SelectList
                        setSelected={(val) => setPriceOne(val)}
                        data={prices}
                        placeholder='$2000'
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text> Parada 2: </Text>
                    <TextInput
                        style={{height: 25,
                            borderWidth: 1,
                            paddingHorizontal: 15}}
                        placeholder='Calle 80 con Av. 68'
                        onChangeText={(stop2) => {
                            setStopTwo(stop2.replace(/ /g, '_'))
                        }}
                        value={stop2}
                    />
                    <Text> Precio: </Text>
                    <SelectList
                        setSelected={(val) => setPriceTwo(val)}
                        data={prices}
                        placeholder='$2000'
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text> Parada 3: </Text>
                    <TextInput
                        style={{height: 25,
                            borderWidth: 1,
                            paddingHorizontal: 15}}
                        placeholder='Calle 80 con Av. 68'
                        onChangeText={(stop3) => {
                            setStopThree(stop3.replace(/ /g, '_'))
                        }}
                        value={stop3}
                    />
                    <Text> Precio: </Text>
                    <SelectList
                        setSelected={(val) => setPriceThree(val)}
                        data={prices}
                        placeholder='$2000'
                    />
                </View>
            </View>

            <View style={{flexDirection: 'row', marginVertical:10, alignItems: 'center' }}>
                <Text> Hora de salida: </Text>
                <TextInput
                    style={{height: 25,
                        borderWidth: 1,
                        paddingHorizontal: 20}}
                    placeholder='13:00'
                    onChangeText={(time) => {
                        setFinTime(time)
                    }}
                    value={finTime}
                />
            </View>

            <Button
                title='Guardar Viaje'
                onPress = {() => {
                    addStops();
                    saveNewTrip(newTripJSON);
                    Alert.alert('Se ha agregado correctamente su viaje')
                    props.navigation.navigate("HomeDriverUser")
                }}
            />
        </View>
    )
}
