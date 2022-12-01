import { React} from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
  } from "react-native";
import card3 from "../assets/card3.png";
  
  export default function LandingPage (props) {
    
    const redir = () => {
          props.navigation.navigate("Contact");   
    };
    const redirLogin = () => {
      props.navigation.navigate("Login");   
};
   
    return (
      <View  style={styles.viewTotal}>
        <View>
          <Button onPress={redirLogin} title="Login" color="#3E3BC7" />
        </View>
        <View style={styles.containerCard}>
          <Text style={styles.title}> Generar Ganancias</Text>
          <Text style={styles.body}>Genera ganancias por viajes realizados.</Text>
          <Text style={styles.body}>Organiza tus horarios y dispone de tu tiempo.</Text>
        </View>
        <View style={styles.containerCard} >
          <Text style={styles.title}> Seguridad</Text>
          <Text style={styles.body}> Transporte colectivo en un entorno común entre estudiantes universitarios y empleados.</Text>
        </View>
        <View style={styles.containerCard} >
          <Text style={styles.title}> Opción de viaje</Text>
          <Text style={styles.body}> Pide un viaje cuando lo necesites.</Text>
        </View>
        <Button
          onPress={redir} 
          title="contactar"
        />
        <Text> </Text>
         <Image source={card3} style={styles.image} />
      </View>
    );
  };

const styles = StyleSheet.create({

  viewTotal:{
    padding:20,
  },
  containerCard: {

    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
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
    height: 230,
    width: 350,
    // resizeMode: "contain",
    alignItems: "center",
  },

  });