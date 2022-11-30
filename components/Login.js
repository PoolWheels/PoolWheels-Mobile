import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";

import logo from "../assets/logo.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const redirect = () => {
    navigation.navigate("HomeTravelerUser");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.textoBienvenido}>Bienvenido</Text>

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
      />

      <StatusBar style="auto" />

      <Button onPress={redirect} title="Login" />
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },

  logo: {
    height: 250,
    resizeMode: "contain",
  },

  textoBienvenido: {
    fontSize: 30,
  },
});

export default Login;
