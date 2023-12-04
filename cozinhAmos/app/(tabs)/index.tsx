import { FlatList, StyleSheet } from 'react-native';

import { View } from '../../components/Themed';

import { useEffect, useState } from 'react';
import Receita from '../../interfaces/receita';
import axios from 'axios';
import { baseUrl } from '../../constants/constantes';
import CozinhAmosSearchBar from '../../components/searchBar';
import CardReceita from '../../components/cardReceita';

export default function BuscarScreen() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [filteredReceitas, setFilteredReceitas] = useState<Receita[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');


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
    const filtered = receitas.filter(receita =>
      receita.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredReceitas(filtered);
  };

  return (
    <View style={styles.container}>
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
