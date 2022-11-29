import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Paymethodshome from "./components/Paymethodshome.js";
import NewpaymethodsView from "./components/NewPayMethods";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Paymethodshome/>
      <NewpaymethodsView/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
