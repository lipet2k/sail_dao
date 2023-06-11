import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { View, Text } from 'react-native';
import React, { useState } from 'react';

import NavigationBar from './navigators/NavigationBar';
import Header from './navigators/Header';

import solanaWeb3 from "@solana/web3.js";


export default function App() {
  const [page, setPage] = React.useState("Chat");
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
};
