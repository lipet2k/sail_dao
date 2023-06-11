import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";

const Home = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in...");
  };

  return (
    <View style={styles.container}>
      <Image source={require("./logo.jpg")} alt="logo" style={styles.image}/>
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Connect to Wallet
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 30,
    marginLeft: 70,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default Home;
