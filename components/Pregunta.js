import React from "react";
import { View, Text } from "react-native";

const Pregunta = (props) => {
  return (
    <View
      style={{
        padding: 15,
        width: 340,
        backgroundColor: "#0086ff",
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
        {props.pregunta}
      </Text>
      <Text style={{ fontSize: 15, fontWeight: "400", color: "white" }}>
        {props.respuesta}
      </Text>
    </View>
  );
};

export default Pregunta;
