import { React } from "react";
import { TouchableOpacity } from "react-native";
import {StyleSheet,View,Text,Image} from "react-native";
import MapView, {Marker,Polyline} from "react-native-maps";
import { useState } from "react";

import gmail from "../assets/gmail.png";

export default function Contact(){

  const[origin,setOrigin]=useState({
    latitude:4.783430237574415,
    longitude:-74.04291736602323,
  });

  const[destination,setDestination]=useState({
    latitude:4.783430237574415,
    longitude:-74.04291736602323,
  });

    return (

        <View  style={styles.viewTotal}>

          <View style={styles.containerCard} >
          <Text style={styles.title}> Ubicación</Text>
            <MapView 
            style={styles.map}
            initialRegion={{
              latitude:origin.latitude,
              longitude:origin.longitude,
              latitudeDelta:0.09,
              longitudeDelta:0.04
            }}
            >
              <Marker
                draggable
                coordinate={origin}
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
              />
              <Marker
              coordinate={destination}
              />

            </MapView>
            <Text></Text>
          <Image source={gmail} style={styles.image} />
          <View style={styles.containerCard} >
            <Text style={styles.title}> Gmail</Text>
            <Text style={styles.body}> uniwheelscompany@gmail.com</Text>
          </View>
          
          </View> 
      </View>
      );
  }

  const styles = StyleSheet.create({

    viewTotal:{
      padding:20,
    },
    containerCard: {
  
      borderWidth: 0,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 5,
      
    },
    title:{
      fontSize: 26,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 'bold',
    },
  
    body:{
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  
    image:{
      height: 70,
      resizeMode: "contain",
      alignItems: "center",
      justifyContent: "center",
    },

    map:{
      width:350,
      height:450,
    },
  
    });