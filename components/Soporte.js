import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Pregunta from "./Pregunta";
import data from "../utils/preguntasData";
import comentariosData from "../utils/comentariosData";
import Comentario from "./Comentario";

const Soporte = () => {
  const [comentarios, setComentarios] = React.useState(comentariosData);
  const [nuevoComentario, setNuevoComentario] = React.useState("");

  function handleSubmit() {
    Alert.alert("Enviado!");
  }

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
        data={comentarios.comentarios}
        keyExtractor={(item) => item.comentario}
        renderItem={({ item }) => (
          <Comentario comentario={item.comentario} fecha={item.fecha} />
        )}
      />
      <Text style={styles.subtitle}>Registra un comentario!</Text>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.text2}>Nuevo comentario:</Text>
        <TextInput
          style={styles.input}
          value={nuevoComentario}
          onChangeText={(text) => {
            setNuevoComentario(text);
          }}
          placeholder="Ingrese el texto"
        />
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
    marginVertical: 15,
  },
});

export default Soporte;
