import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Appbar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CardPostReceita from "../components/cardPostReceita";
import BottomNavBar from "../components/bottomNavBar";

const PerfilScreen = () => {
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
            Julia Amaral
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={{ fontSize: 24 }}>33</Text>
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
            <Text style={{ fontSize: 24 }}>45</Text>
            <Text>Seguidores</Text>
          </View>
        </View>

        <View style={{ alignSelf: "center", margin: 20 }}>
          <Button mode="contained" onPress={() => {}} style={{backgroundColor: "lightgreen"}}>
            Seguir
          </Button>
        </View>

        <View style={styles.card}>
          <CardPostReceita></CardPostReceita>
          <CardPostReceita></CardPostReceita>
          <CardPostReceita></CardPostReceita>
        </View>

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
