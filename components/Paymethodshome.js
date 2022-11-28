import { StatusBar } from "expo-status-bar";
import { Text, View} from "react-native";
import styles  from "../styles/Paymethod-style.js"

export default function Paymethodshome() {


    return (
        <><StatusBar /><View>
            <Text style={styles.title}>Bienvenidos</Text>
        </View></>
    )
      
};