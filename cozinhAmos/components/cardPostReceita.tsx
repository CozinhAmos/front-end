import { Avatar, Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Receita from "../interfaces/receita";

const CardPostReceita = (receita: Receita) => {
  return (
    <View style={{margin: 5}}>
      <View style={style.header}>
        <View style={style.imgProfile}>
          <Avatar.Image size={55} source={require("../assets/images/logo.png")} />
        </View>
        <View>
          <Text style={style.nameRecipe}>{receita.name}</Text>
          <Text style={style.nameProfile}>{receita.User.name}</Text>
        </View>
      </View>
      <Card>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={style.cardCover}
        />
      </Card>
    </View>
  );
}

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