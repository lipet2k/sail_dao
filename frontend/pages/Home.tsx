import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";

const Home = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#000000" }]}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Page!</Text>
        <Button mode="contained" onPress={() => console.log("Button pressed")}>
          Press me!
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Home;
