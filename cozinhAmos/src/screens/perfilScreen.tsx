import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
  FlatList
} from "react-native";
import { Appbar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CardPostReceita from "../components/cardPostReceita";
import BottomNavBar from "../components/bottomNavBar";
import axios from "axios";
import { baseUrl } from "../constantes";
import Perfil from "../interfaces/perfil";
import Receita from "../interfaces/receita";

const PerfilScreen = () => {
  const [perfil, setPerfil] = useState<Perfil>();
  const [isLoading, setIsLoading] = useState(true);

  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {

    const getPerfil = async () => {
      console.log(baseUrl + "user/" + (global as any).userId);
      try {
        const resposnse = await axios.get(baseUrl + "user/" + (global as any).userId);
        setPerfil(resposnse.data);
      } catch(e) {
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
      } catch(e) {
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
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Appbar.Header mode="center-aligned">
            <Appbar.Content title="CozinhAmos" />
          </Appbar.Header>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/logo.png")}
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
          <Button mode="contained" onPress={() => {}} style={{backgroundColor: "lightgreen"}}>
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

        <View>
          <BottomNavBar></BottomNavBar>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
});

export default PerfilScreen;
