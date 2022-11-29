import React from "react";
import Soporte from "./components/Soporte";
import { View, StyleSheet, Platform, StatusBar } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Soporte />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default App;
