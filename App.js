import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import NewTripView from "./components/NewTripView";
import HomeTravelerUser from "./components/HomeTravelerUser";
import NewpaymethosView from "./components/NewPayMethods";
import Paymethodshome from "./components/Paymethodshome";
import Soporte from "./components/Soporte";
import HomeUserDriver from "./components/HomeUserDriver";
import NewTrip from "./components/NewTrip";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Soporte" component={Soporte} />
        <Stack.Screen name="PayMethods" component={Paymethodshome} />
        <Stack.Screen name="NewPayMethods" component={NewpaymethosView} />
        <Stack.Screen name="HomeTravelerUser" component={HomeTravelerUser} />
        <Stack.Screen name="NewTripView" component={NewTripView} />
        <Stack.Screen name="HomeDriverUser" component={HomeUserDriver} />
        <Stack.Screen name="NewTripForm" component={NewTrip} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
