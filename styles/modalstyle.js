import { StyleSheet } from "react-native";
export default StyleSheet.create({
  centeredView: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "blue",
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 50,
    shadowRadius: 15,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#white",
  },
  buttonOpen: {
    backgroundColor: "white",
  },
  buttonClose: {
    backgroundColor: "#DE4A4A",
    color: "white",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "monospace",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "monospace",
  },
});