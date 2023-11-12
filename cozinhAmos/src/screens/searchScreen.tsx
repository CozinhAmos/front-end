import { ScrollView, View, FlatList } from "react-native";
import AppBar from "../components/appBar";
import CozinhAmosSearchBar from "../components/searchBar";
import BottomNavBar from "../components/bottomNavBar";
import CardReceita from "../components/cardReceita";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constantes";
import Receita from "../interfaces/receita";

export default function SearchScreen() {

  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {

    const getReceitas = async () => {
      try {
        const response = await axios.get(baseUrl + "recipe/all");
        setReceitas(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getReceitas();

  }, []);


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
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <CardReceita key={item.id} name={item.name} />
        )}
      />

      <View style={{ marginTop: 50 }}>
        <BottomNavBar />
      </View>
    </SafeAreaView>
  );
}
