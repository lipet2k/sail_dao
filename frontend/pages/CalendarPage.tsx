import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Appbar } from "react-native-paper";

const CalendarPage = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "black", marginTop: 0 }}>
        <Appbar.BackAction onPress={() => {}} color="white" />
        <Appbar.Content title="Calendar" color="white" />
      </Appbar.Header>

      <View style={styles.calendarContainer}>
        <Calendar
          style={{
            height: 400,
            width: 350,
            backgroundColor: "black",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default CalendarPage;
