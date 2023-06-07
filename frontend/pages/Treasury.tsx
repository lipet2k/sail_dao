import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, List } from "react-native-paper";

const Treasury = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Treasury" />
      </Appbar.Header>
      <View style={styles.content}>
        <List.Section>
          <List.Subheader>Available Funds</List.Subheader>
          <List.Item
            title="Bitcoin (BTC)"
            description="Current balance: 5.23 BTC"
            left={() => <List.Icon icon="currency-btc" />}
          />
          <List.Item
            title="Ethereum (ETH)"
            description="Current balance: 10.75 ETH"
            left={() => <List.Icon icon="currency-eth" />}
          />
        </List.Section>
        <List.Section>
          <List.Subheader>Recent Transactions</List.Subheader>
          <List.Item
            title="Received BTC"
            description="0.5 BTC from John Doe"
            left={() => <List.Icon icon="arrow-bottom-right" />}
          />
          <List.Item
            title="Sent ETH"
            description="2.25 ETH to Jane Smith"
            left={() => <List.Icon icon="arrow-top-right" />}
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
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Treasury;
