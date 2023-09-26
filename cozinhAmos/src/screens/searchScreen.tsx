import { ScrollView, View, FlatList } from "react-native";
import AppBar from "../components/appBar";
import CozinhAmosSearchBar from "../components/searchBar";
import BottomNavBar from "../components/bottomNavBar";
import CardReceita from "../components/cardReceita";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function SearchScreen() {
  const data = [
    { id: "00", nome: "Brigadeiro" },
    { id: "01", nome: "Batata Recheada" },
    { id: "02", nome: "Cozido" },
    { id: "03", nome: "Panettone" },
    { id: "04", nome: "Brigadeiro" },
    { id: "05", nome: "Batata Recheada" },
    { id: "06", nome: "Cozido" },
    { id: "07", nome: "Panettone" },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <AppBar />
      </View>

      <View>
        <CozinhAmosSearchBar />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CardReceita key={item.id} name={item.nome} />
        )}
      />

      <View style={{ marginTop: 50 }}>
        <BottomNavBar />
      </View>
    </SafeAreaView>
  );
}
