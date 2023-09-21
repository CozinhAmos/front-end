import PerfilScreen from './src/screens/perfilScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import LoginScreen from './src/screens/loginScreen';
import CadastrarReceitaScreen from './src/screens/cadastrarReceitaScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <CadastrarReceitaScreen></CadastrarReceitaScreen>
    </SafeAreaProvider>
  );
}