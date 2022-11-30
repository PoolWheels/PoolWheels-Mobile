import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewpaymethosView from "./components/NewPayMethods";
import Paymethodshome from "./components/Paymethodshome";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Metodos de Pago" component={Paymethodshome} />
        <Stack.Screen name="Agregar Metodo de Pago" component={NewpaymethosView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

