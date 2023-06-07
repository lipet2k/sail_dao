import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { View, Text } from 'react-native';

import NavigationBar from './navigators/NavigationBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Text> Something </Text>
        <NavigationBar/>
      </PaperProvider>
    </SafeAreaProvider>
  )
};
