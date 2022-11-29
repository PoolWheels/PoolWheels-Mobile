import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Pregunta from "./Pregunta";
import data from "../utils/preguntasData";
import comentariosData from "../utils/comentariosData";

const Soporte = (props) => {
  return (
    <ScrollView nestedScrollEnabled={true} vertical style={{ flex: 1 }}>
      <Text style={styles.title}>Soporte y Preguntas frecuentes</Text>
      <Text style={styles.text}>
        Te damos la bienvenida al servicio de soporte de Pool Wheels!
      </Text>
      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require("../utils/faq.png")}
        />
      </View>
      <Text style={styles.subtitle}>Preguntas frecuentes</Text>
      <FlatList
        style={{ paddingVertical: 10, marginBottom: 10 }}
        horizontal
        data={data.preguntas}
        keyExtractor={(item) => item.pregunta}
        renderItem={({ item }) => (
          <Pregunta pregunta={item.pregunta} respuesta={item.respuesta} />
        )}
      />
      <Text style={styles.subtitle}>Soporte y comentarios</Text>
      <Text style={styles.text2}>
        Para nosotros es muy importante que tengas una buena experiencia como
        usuario de nuestra aplicación, por lo tanto, hemos habilitado un espacio
        para que puedas enviarnos tus comentarios, sugerencias o quejas acerca
        de la aplicación ☺
      </Text>
      <Text style={[styles.text2, { marginTop: 10 }]}>
        Aquí podrás encontrar algunos de los comentarios más recientes de
        nuestros usuarios
      </Text>
      <FlatList
        style={{ paddingVertical: 10, marginBottom: 10 }}
        horizontal
        data={comentariosData.comentarios}
        keyExtractor={(item) => item.comentario}
        renderItem={({ item }) => (
          <Pregunta pregunta={item.comentario} respuesta={item.fecha} />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#0086ff",
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3bbfff",
  },
  text: {
    color: "black",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    color: "black",
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Soporte;
