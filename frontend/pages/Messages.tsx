import React from "react";
import { View, FlatList } from "react-native";
import { List, Avatar } from "react-native-paper";


const Messages = () => {
  const messages = [
    {
      id: "1",
      sender: "John Doe",
      message: "Hey, how are you?",
    },
    {
      id: "2",
      sender: "Jane Smith",
      message: "Are we still meeting for lunch?",
    },
    // Add more messages here
  ];

  const renderItem = ({ item }) => (
    <List.Item
      title={item.sender}
      description={item.message}
      left={(props) => <Avatar.Text {...props} label={item.sender[0]} />}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Messages;
