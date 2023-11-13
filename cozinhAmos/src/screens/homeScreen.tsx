import { ActivityIndicator, ScrollView, View, FlatList } from "react-native";
import AppBar from "../components/appBar";
import CardPostReceita from "../components/cardPostReceita";
import BottomNavBar from "../components/bottomNavBar";
import { Appbar } from "react-native-paper";
import Receita from "../interfaces/receita";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constantes";

export default function HomeScreen() {
    const [receitas, setReceitas] = useState<Receita[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(baseUrl + "recipe/" + (global as any).userId + "/network");
        const getReceitas = async () => {
            try {
                const resposnse = await axios.post(baseUrl + "recipe/" + (global as any).userId + "/network");
                setReceitas(resposnse.data.recipesFromFollow);
                console.log(receitas);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }

        getReceitas();

    }, []);

    if (isLoading) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <ScrollView >
            <View>
                <Appbar.Header mode='center-aligned'>
                    <Appbar.Content title='CozinhAmos' />

                </Appbar.Header>
            </View>

            <FlatList
                data={receitas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardPostReceita {...item} />
                )}
            />

            <View>
                <BottomNavBar></BottomNavBar>
            </View>
        </ScrollView>
    )
}