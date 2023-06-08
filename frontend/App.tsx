import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { View, Text } from 'react-native';

import NavigationBar from './navigators/NavigationBar';
import Header from './navigators/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Header title="Home" />
        <NavigationBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
};
