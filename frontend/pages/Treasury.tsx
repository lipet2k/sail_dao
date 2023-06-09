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
        <List.Section title="Expenses" titleStyle={{ color: "white" }}>
          <List.Item
            style={{ backgroundColor: "red", borderRadius: 10 }}
            title="Cost of Goods Sold"
            description="$1000"
            left={(props) => (
              <List.Icon {...props} icon="arrow-down-bold-circle-outline" />
            )}
            right={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            style={{ backgroundColor: "red", borderRadius: 10, marginTop: 3 }}
            title="Rent for Vending Machine Space"
            description="$200"
            left={(props) => (
              <List.Icon {...props} icon="arrow-down-bold-circle-outline" />
            )}
            right={() => <List.Icon icon="chevron-right" />}
          />
        </List.Section>
      </View>

      <View style={styles.incomeContainer}>
        <List.Section title="Income" titleStyle={{ color: "white" }}>
          <List.Item
            style={{ backgroundColor: "#0BDA51", borderRadius: 10 }}
            title="Gross Sales"
            description="$3000"
            left={(props) => (
              <List.Icon {...props} icon="arrow-up-bold-circle-outline" />
            )}
            right={() => <List.Icon icon="chevron-right" />}
          />
          <List.Item
            style={{
              backgroundColor: "#0BDA51",
              borderRadius: 10,
              marginTop: 3,
            }}
            title="Freelancing"
            description="$500"
            left={(props) => (
              <List.Icon {...props} icon="arrow-up-bold-circle-outline" />
            )}
            right={() => <List.Icon icon="chevron-right" />}
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
    backgroundColor: "black",
  },
  incomeContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
});

export default Treasury;
