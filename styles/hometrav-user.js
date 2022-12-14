import { StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: "18%",
    color: "rgb(27,74,255)",
    fontSize: 38,
    fontWeight: "800",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "rgb(10,210,117)",
    width: "90%",
    paddingBottom: 10,
  },
  buttonOption: {
    paddingVertical: 10,
    marginHorizontal: 45,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: "rgb(15,50,117)",
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.35,
    color: "white",
  },
  secondButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "grey",
    marginBottom: 6,
  },
});

