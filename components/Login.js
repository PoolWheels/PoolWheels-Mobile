import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import { useState } from "react";
import { verificarCredenciales, obtenerRol } from "../utils/dataUsers";

import logo from "../assets/logo.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    if (email === "" || password === "") {
      alert("Se deben completar todos los campos");
    } else {
      if (verificarCredenciales(email, password)) {
        redirect();
      } else {
        alert(
          "Los datos ingresados no coinciden con ninguna cuenta registrada"
        );
      }
    }
  };

  const redirect = () => {
    if (obtenerRol(email) === "DRIVER") {
      navigation.navigate("HomeDriverUser");
    } else if (obtenerRol(email) === "TRAVELER") {
      navigation.navigate("HomeTravelerUser");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Correo Electrónico"
        autocomplete="email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <StatusBar style="auto" />

      <Text></Text>

      <Button
        onPress={doLogin}
        title="Login"
        color="#3E3BC7"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container_dos: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 10,
  },

  logo: {
    height: 170,
    resizeMode: "contain",
    marginBottom: 30,
  },

  textoBienvenido: {
    fontSize: 30,
  },

  button: {
    borderRadius: 10,
  },
});

export default Login;
