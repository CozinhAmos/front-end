import { Avatar, Card, Text } from "react-native-paper";
import { Pressable, StyleSheet, View } from "react-native";
import Receita from "../interfaces/receita";
import { Link, router } from "expo-router";
import { Route } from "expo-router/build/Route";

const CardPostReceita = (receita: Receita) => {
  function handleVisitSomeone() {
    (global as any).userVisit = receita.User.id;
    router.push("/user");
  }
  return (
    <View style={{ margin: 5 }}>
      <View style={style.header}>
        <View style={style.imgProfile}>
          <Pressable onPress={handleVisitSomeone}>
            <Avatar.Image
              size={55}
              source={require("../assets/images/logo.png")}
            />
          </Pressable>
        </View>
        <View>
          <Text style={style.nameRecipe}>{receita.name}</Text>
          <Text style={style.nameProfile}>{receita.User.name}</Text>
        </View>
      </View>
      <Card>
        <Card.Cover
          source={{
            uri: "https://yt3.googleusercontent.com/ytc/APkrFKatmClM4N0mkem4XewrHLGbeB7RGBM3ZKMrymzH=s900-c-k-c0x00ffffff-no-rj",
          }}
          style={style.cardCover}
        />
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: -3,
    zIndex: 1,
  },

  imgProfile: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 5,
  },
  cardCover: {
    marginTop: -22,
  },
  nameProfile: {
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  nameRecipe: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CardPostReceita;
