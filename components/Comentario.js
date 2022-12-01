import React from "react";
import { View, Text } from "react-native";

const Comentario = (props) => {
  return (
    <View
      style={{
        padding: 15,
        width: 180,
        backgroundColor: "#0086ff",
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
        {props.comentario}
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "400", color: "white" }}>
        {props.fecha}
      </Text>
    </View>
  );
};

export default Comentario;
