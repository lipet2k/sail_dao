import PropTypes from "prop-types";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Messages from "../pages/Messages";


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
      key: "events",
      title: "Events",
      focusedIcon: "calendar",
      unfocusedIcon: "calendar-outline",
    },
    {
      key: "profile",
      title: "Profile",
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
    home: () => <Text>omething</Text>,
    messages: () => <Messages/>,
    search: () => <Text>something</Text>,
    profile: () => <Text>Something</Text>,
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
