import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { View } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <View></View>
      </PaperProvider>
    </SafeAreaProvider>
  )
};
