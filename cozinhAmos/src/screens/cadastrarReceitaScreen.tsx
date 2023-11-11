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
        try {
          const response = await axios.post(baseUrl + 'recipe', {
            userId: 'id',
            name: nome,
            description: descricao,
            ingredients: ingredientes,
            preparation: preparo
          });
    
          if (response.status == 200) {
            // ROUTE => vai para a home
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