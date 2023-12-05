import { StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import { baseUrl } from "../../constants/constantes";

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Perfil from '../../interfaces/perfil';
import Receita from '../../interfaces/receita';

import axios from "axios";
import { Button } from 'react-native-paper';
import CardPostReceita from '../../components/cardPostReceita';

export default function PerfilScreen() {
  const [perfil, setPerfil] = useState<Perfil>();
  const [isLoading, setIsLoading] = useState(true);

  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {

    const getPerfil = async () => {
      console.log(baseUrl + "user/" + (global as any).userId);
      try {
        const resposnse = await axios.get(baseUrl + "user/" + (global as any).userId);
        setPerfil(resposnse.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    const getReceitas = async () => {
      try {
        const resposnse = await axios.get(baseUrl + "recipe/my/" + (global as any).userId);
        setReceitas(resposnse.data.recipes);
        console.log(receitas);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    getPerfil();
    getReceitas();

  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!perfil) {
    return <Text>Não foi possível obter os dados do perfil.</Text>;
  }

  return (
    <View style={styles.container}>

      <View style={{ alignSelf: "center" }}>
        <View style={styles.profileImage}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.image}
            resizeMode="center"
          ></Image>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 28, alignSelf: "center" }}>
          {perfil.name}
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={{ fontSize: 24 }}>{perfil._count.following}</Text>
          <Text>Seguindo</Text>
        </View>
        <View
          style={[
            styles.statsBox,
            {
              borderColor: "#DFD8C8",
              borderLeftWidth: 1,
              borderRightWidth: 1,
            },
          ]}
        >
          <Text style={{ fontSize: 24 }}>{perfil._count.followers}</Text>
          <Text>Seguidores</Text>
        </View>
      </View>

      <View style={{ alignSelf: "center", margin: 20 }}>
        <Button mode="contained" onPress={() => { }} style={{ backgroundColor: "lightgreen" }}>
          Seguir
        </Button>
      </View>

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
    backgroundColor: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  card: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const styles3 = StyleSheet.create({
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
