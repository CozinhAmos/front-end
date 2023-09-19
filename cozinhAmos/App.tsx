import PerfilScreen from './src/screens/perfilScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import LoginScreen from './src/screens/loginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <PerfilScreen></PerfilScreen>
    </SafeAreaProvider>
  );
}