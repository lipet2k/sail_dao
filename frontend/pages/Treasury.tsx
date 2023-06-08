import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, List } from "react-native-paper";

const Treasury = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => {}} color="white" />
        <Appbar.Content title="Your Account" color="white" />
      </Appbar.Header>

      <View style={styles.expenseContainer}>
        <List.Section title="Expenses">
          <List.Item
            title="Cost of Goods Sold"
            description="$1000"
            left={(props) => <List.Icon {...props} icon="arrow-down" />}
          />
          <List.Item
            title="Rent for Vending Machine Space"
            description="$200"
            left={(props) => <List.Icon {...props} icon="arrow-down" />}
          />
        </List.Section>
      </View>

      <View style={styles.incomeContainer}>
        <List.Section title="Income">
          <List.Item
            title="Gross Sales"
            description="$3000"
            left={(props) => <List.Icon {...props} icon="arrow-up" />}
          />
          <List.Item
            title="Freelancing"
            description="$500"
            left={(props) => <List.Icon {...props} icon="arrow-up" />}
          />
        </List.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "black",
    marginTop: 0,
  },
  expenseContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  incomeContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default Treasury;
