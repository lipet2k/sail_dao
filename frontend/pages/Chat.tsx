import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, TextInput, Button, List } from "react-native-paper";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSendMessage = () => {
    if (message) {
      setChat([...chat, message]);
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Chat" />
      </Appbar.Header>
      <View style={styles.content}>
        <List.Section>
          <List.Subheader>Chat History</List.Subheader>
          {chat.map((item, index) => (
            <List.Item key={index} title={item} />
          ))}
        </List.Section>
        <View style={styles.inputContainer}>
          <TextInput
            label="Message"
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSendMessage}>
            Send
          </Button>
        </View>
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
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});

export default Chat;
