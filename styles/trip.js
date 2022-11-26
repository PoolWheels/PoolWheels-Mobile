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
    alignSelf: "center",
    fontWeight: "bold",
  },
  subtitles: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgb(10,2,27)",
    marginLeft: 15,
  },
  hour: {
    fontWeight: "bold",
    color: "rgb(2,55,120)",
    marginLeft: 15,
  },
  stops: {
    fontFamily: "monospace",
    justifyContent: "center",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "rgb(15,50,117)",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "Helvetica",
  },
});
