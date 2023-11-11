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
    ScrollView,
    Alert,
} from "react-native";
import { baseUrl } from "../constantes";

export default function RegistrarScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");

    const handleRegistrar = async () => {
        try {
            const response = await axios.post(baseUrl + 'user', {
              nome: nome,
              email: email,
              password: password
            });

            if(response.status == 200){
            Alert.alert("Usuário cadastrado com sucesso", "Realize o login para acessar o aplicativo");
            // ROUTE => volta para login
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Erro ao cadastrar usuário", "Tente novamente mais tarde");
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <ScrollView>
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
                        placeholder="Nome"
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
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
                    <Pressable style={styles.button} onPress={handleRegistrar}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </Pressable>
                </View>
            </ScrollView>
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
