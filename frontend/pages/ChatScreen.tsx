import React from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Appbar, Avatar, Text } from "react-native-paper";

const ChatScreen = () => {
  const [messages, setMessages] = React.useState([
    {
      id: 2,
      text: "Do you want a boat?",
      timestamp: "2021-03-01T12:00:00.000Z",
      sender: "Mike",
    },
    {
      id: 1,
      text: "Hello",
      timestamp: "2021-03-01T12:00:00.000Z",
      sender: "Mike",
    }
,
  ]);
  const [inputText, setInputText] = React.useState("");

  const handleSend = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        timestamp: new Date().toISOString(),
        sender: "You",
      };

      setMessages([newMessage, ...messages]);
      setInputText("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={
        item.sender === "You"
          ? styles.sentMessageContainer
          : styles.receivedMessageContainer
      }
    >
      {item.sender !== "You" && (
        <Avatar.Text size={32} label={item.sender.charAt(0)} />
      )}
      <View
        style={
          item.sender === "You"
            ? styles.sentMessageContent
            : styles.receivedMessageContent
        }
      >
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "black", marginTop: 0 }}>
        <Appbar.BackAction onPress={() => {}} color="white" />
        <Appbar.Content title="Chat" color="white" />
      </Appbar.Header>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.messageList}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  messageList: {
    padding: 16,
  },
  sentMessageContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "flex-end",
    marginBottom: 8,
  },
  receivedMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  sentMessageContent: {
    backgroundColor: "#dcf8c6",
    borderRadius: 16,
    padding: 12,
    marginLeft: 8,
    maxWidth: "70%",
  },
  receivedMessageContent: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 12,
    marginLeft: 8,
    maxWidth: "70%",
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    color: "#888888",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "black",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#154c79",
  },
  sendButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatScreen;
