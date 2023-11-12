import { KeyboardAvoidingView, Platform, ScrollView, View, Text, Image, Alert } from "react-native";
import { Appbar, Button } from "react-native-paper";
import CozinhAmosTextInput from "../components/textInput";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../constantes";

export default function CadastrarReceitaScreen() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [preparo, setPreparo] = useState('');

    const handleClearForm = () => {
        setNome('');
        setDescricao('');
        setIngredientes('');
        setPreparo('');
      };

    const handleCadastrarReceita = async () => {
        console.log(baseUrl + 'recipe');
        console.log(nome);
        console.log(descricao);
        console.log(ingredientes);
        console.log(preparo);
        console.log((global as any).userId);
        if(nome == '' || descricao == '' || ingredientes == '' || preparo == ''){
            Alert.alert('Campos em branco', "Preencha todos os campos para cadastrar a sua receita");
            return;
        }
        try {
          const response = await axios.post(baseUrl + 'recipe', {
            userId: (global as any).userId,
            name: nome,
            description: descricao,
            ingredients: ingredientes,
            preparation: preparo
          });
          
          console.log('passou aqui');
          console.log(response);
    
          if (response.status == 200) {
            // ROUTE => vai para a home
            Alert.alert('Receita Cadastrada com sucesso');
          }
    
        } catch (error) {
         console.log(error);
         Alert.alert('Erro ao cadastrar receita', "Tente novamente mais tarde");
        }
      };

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
                    <Text style={{fontSize: 21, textAlign:"center", fontWeight: "600", margin: 20}}>
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

                <View style={{padding: 20}}>
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

                    <CozinhAmosTextInput
                        label="Modo de preparo"
                        value={preparo}
                        onChangeText={text => setPreparo(text)}
                    />

                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    justifyContent: 'space-around',
                }}>
                    <Button style={{backgroundColor: "red"}} mode='contained' onPress={handleClearForm}>
                        Descartar
                    </Button>
                    <Button style={{backgroundColor: "lightgreen"}} mode='contained' onPress={handleCadastrarReceita}>
                        Cadastrar
                    </Button>
                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}