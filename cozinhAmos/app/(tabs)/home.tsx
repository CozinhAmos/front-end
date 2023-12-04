import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import CardPostReceita from '../../components/cardPostReceita';
import Receita from '../../interfaces/receita';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../constants/constantes';
import axios from 'axios';

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
    <View>
      <FlatList
                data={receitas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardPostReceita {...item} />
                )}
            />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
