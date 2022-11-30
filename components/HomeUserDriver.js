import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import {trips} from '../utils/dataTrips'

export default function HomeUserDriver(props) {
    
    const formatChildItems = (stops) => {
        const arrayStops = [];

        for (let key in stops) {
        arrayStops.push([key.replace(/_+/g, ' '), stops[key]]);
        }
        return arrayStops;
    };
    
    return (
        <View>
            <FlatList
                data={trips}
                keyExtractor={ item => item.id }
                renderItem={({item : trip}) => (
                    <View>
                        <Text>Punto de partida: {trip.addrInit}</Text>
                        <Text>Dirección de Destino: {trip.addrFin}</Text>
                        <Text>Puestos Disponibles: {trip.availableSeats}</Text>
                        <Text>Paradas:</Text>
                        {formatChildItems(trip.stops).map((stop) => (
                            <Text>
                                {"          "}
                                {stop[0] + ": " + stop[1]}
                            </Text>
                        ))}
                        <Text>Pasajeros:</Text>
                        {formatChildItems(trip.passengers).map((passengers) => (
                            <Text>
                                {"          "}
                                {passengers[0] + ": " + passengers[1]}
                            </Text>
                        ))}
                        <Text>Hora de salida: {trip.finTime}</Text>
                    </View>
                )}
            />
            <Button
                title='Crear nuevo viaje'
                onPress={() => props.navigation.navigate("NewTripForm")}
            />
        </View>
        
    )
}
