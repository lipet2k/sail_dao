import PropTypes from "prop-types";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import Treasury from "../pages/Treasury";
import CalendarPage from "../pages/CalendarPage";
import ChatScreen from "../pages/ChatScreen";


const NavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "comm",
      title: "Comm",
      focusedIcon: "message",
      unfocusedIcon: "message-outline",

    },
    {
      key: "money",
      title: "Money",
      focusedIcon: "cash",
      unfocusedIcon: "cash-100",
    },
    {
        key: "calendar",
        title: "Calendar",
        focusedIcon: "calendar",
        unfocusedIcon: "calendar-outline",
    }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    money: () => <Treasury/>,
    comm: () => <ChatScreen/>,
    calendar: () => <CalendarPage/>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
      barStyle={{ backgroundColor: "black" }}
    />
  );
};

export default NavigationBar;
