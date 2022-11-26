import { Dimensions, StyleSheet } from "react-native";


const width = Dimensions.get("window").width * 0.7;

export default StyleSheet.create({
  trip: {
    width: "80%",
    resizeMode: "cover",
    borderRadius: 5,
    margin: 0,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgb(27,74,255)",
    alignContent: "center",
    justifyContent: "center",
    height: "50%",
  },
  title: {
    color: "rgb(10,73,205)",
    fontSize: 30,
    fontFamily: "monospace",
    fontWeight: "600",
    textAlign: "center",
    fontWeight: "bold",
  },
});
