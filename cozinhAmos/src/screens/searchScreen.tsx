import { ScrollView, View, FlatList } from "react-native";
import AppBar from "../components/appBar";
import CozinhAmosSearchBar from "../components/searchBar";
import BottomNavBar from "../components/bottomNavBar";
import CardReceita from "../components/cardReceita";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constantes";

interface Receita {
  id: string,
  name: string,
  likes: number,
  User: {
    id: string,
    name: string,
  }
}

export default function SearchScreen() {

  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [filteredReceitas, setFilteredReceitas] = useState<Receita[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  console.log("aqui 1");

  useEffect(() => {

    const getReceitas = async () => {
      try {
        const response = await axios.get(baseUrl + "recipe/all");
        setReceitas(response.data);
        setFilteredReceitas(response.data); 
      } catch (e) {
        console.log(e);
      }
    };

    getReceitas();

  }, []);


  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("aqui 2");
    // Filtra as receitas com base no texto de pesquisa
    const filtered = receitas.filter(receita =>
      receita.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredReceitas(filtered);
  };

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
        <CozinhAmosSearchBar onChangeSearch={handleSearch} value={searchQuery} />
      </View>

      <FlatList
        data={filteredReceitas}
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
