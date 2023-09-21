import { KeyboardAvoidingView, Platform, ScrollView, View, Text, Image } from "react-native";
import { Appbar, Button } from "react-native-paper";
import CozinhAmosTextInput from "../components/textInput";
import { useState } from "react";

export default function CadastrarReceitaScreen() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ingredientes, setIngredientes] = useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >

            <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                    <Appbar.Header mode='center-aligned'>
                        <Appbar.BackAction onPress={() => { }} />
                        <Appbar.Content title='CozinhAmos' />
                    </Appbar.Header>
                </View>

                <View>
                    <Text>
                        Cadastre sua receita
                    </Text>
                </View>

                <View>
                    <Image source={{ uri: 'https://picsum.photos/700' }} style={{
                        width: 350,
                        height: 200,
                        borderColor: 'black',
                        borderWidth: 1,
                        margin: 20,
                        alignSelf: 'center'
                    }} />
                </View>

                <View>
                    <CozinhAmosTextInput
                        label="Nome do prato"
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />

                    <CozinhAmosTextInput
                        label="Descrição do prato"
                        value={descricao}
                        onChangeText={text => setDescricao(text)}
                    />

                    <CozinhAmosTextInput
                        label="Ingredientes"
                        value={ingredientes}
                        onChangeText={text => setIngredientes(text)}
                    />
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    justifyContent: 'space-around',
                }}>
                    <Button mode='contained' onPress={() => { }}>
                        Descartar
                    </Button>
                    <Button mode='contained' onPress={() => { }}>
                        Cadastrar
                    </Button>
                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}