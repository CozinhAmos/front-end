import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { baseUrl } from "../constantes";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if(email == "" || password == "") {
      Alert.alert("Campos em branco", "Preencha todos os campos para realizar o login");
      return;
    }
    try {
      const response = await axios.post(baseUrl + 'user/login', {
        email: email,
        password: password
      });

      if (response.data.status == 'liberado') {
        (global as any). userId = response.data.result.id;
        (global as any). followId = response.data.result.followId;
        (global as any). userEmail = response.data.result.email;
        (global as any). userName = response.data.result.name;
        // ROUTE => vai para a home
      } else {
        Alert.alert('Acesso negado', "Usuário inválido");
      }

      console.log((global as any). userId);

    } catch (error) {
      Alert.alert("Erro ao fazer o login", "Tente novamente mais tarde");
    }
  };

  const handleRegistrar = async () => {
    // ROUTE => vai para tela de registrar
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>CozinhAmos</Text>
      </View>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        margin: 20,
      }}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
        <Pressable style={styles.buttonRegistrar} onPress={handleRegistrar}>
          <Text style={styles.buttonTextRegistrar}>Registrar</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 100,
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "lightgreen",
  },
  input: {
    width: "100%",
    height: 60,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgreen",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "lightgreen", // Cor de fundo verde claro
    borderRadius: 20, // Borda redonda
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    margin: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  buttonRegistrar: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "lightgreen",
    borderWidth: 3,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  buttonTextRegistrar: {
    color: "lightgreen",
    fontSize: 18,
  },
});
