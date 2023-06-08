import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Appbar, Text } from "react-native-paper";
import AppbarContent from "react-native-paper/lib/typescript/src/components/Appbar/AppbarContent";
import PropTypes from "prop-types";

const CalendarPage = () => {

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "black", marginTop: 0 }}>
        <Appbar.BackAction onPress={() => {}} color="white" />
        <Appbar.Content title="Calendar" color="white" />
      </Appbar.Header>

      <Calendar
        style={{
          backgroundColor: "black",
        }}
      />
      <View style={{height: 100, width: 100}}>

      </View>
    </View>
  );
};

export default CalendarPage;
