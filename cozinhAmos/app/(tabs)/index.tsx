import { FlatList, StyleSheet } from "react-native";

import { View } from "../../components/Themed";

import { useEffect, useState } from "react";
import Receita from "../../interfaces/receita";
import axios from "axios";
import { baseUrl } from "../../constants/constantes";
import CozinhAmosSearchBar from "../../components/searchBar";
import CardReceita from "../../components/cardReceita";
import CardPostReceita from "../../components/cardPostReceita";

export default function BuscarScreen() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [filteredReceitas, setFilteredReceitas] = useState<Receita[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    // Filtra as receitas com base no texto de pesquisa
    const filtered = receitas.filter((receita) =>
      receita.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredReceitas(filtered);
  };

  return (
    <View style={styles.container}>
      <View>
        <CozinhAmosSearchBar
          onChangeSearch={handleSearch}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={filteredReceitas}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.CardPostReceita}>
            <CardPostReceita {...item} name={item.name} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CardPostReceita: {
    width: "50%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
