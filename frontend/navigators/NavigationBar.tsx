import PropTypes from "prop-types";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import Messages from "../pages/Messages";
import Home from "../pages/Home";
import Treasury from "../pages/Treasury";
import Chat from "../pages/Chat";


const NavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "checkbox-blank-outline",
      unfocusedIcon: "checkbox-blank-badge-outline",
    },
    {
      key: "chat",
      title: "Chat",
      focusedIcon: "message",
      unfocusedIcon: "message-outline",
    },
    {
      key: "treasury",
      title: "Treasury",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "messages",
      title: "Messages",
      focusedIcon: "message",
      unfocusedIcon: "message-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <Home/>,
    messages: () => <Messages/>,
    treasury: () => <Treasury/>,
    chat: () => <Chat/>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
    />
  );
};

export default NavigationBar;
