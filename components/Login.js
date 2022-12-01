import { StatusBar } from "expo-status-bar";
import { Button } from "react-native";
import { StyleSheet, Text, View, TextInput, Image, Switch } from "react-native";
import { useState } from "react";

import logo from "../assets/logo.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const redirect = () => {
    if (isEnabled) {
      navigation.navigate("LandingPage");
    } else {
      navigation.navigate("LandingPage");
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
      />

      <StatusBar style="auto" />

      <View style={styles.container_dos}>
        <Text>Usuario Conductor</Text>

        <Switch
          trackColor={{ false: "#767577", true: "#3E3BC7" }}
          thumbColor={isEnabled ? "#8C8ADE" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <Button onPress={redirect} title="Login" color="#3E3BC7" />
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
  },

  logo: {
    height: 170,
    resizeMode: "contain",
    marginBottom: 30,
  },

  textoBienvenido: {
    fontSize: 30,
  },
});

export default Login;
// export
