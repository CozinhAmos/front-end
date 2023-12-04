import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

interface PropsCardReceita {
  name: string;
}

export default function CardReceita(props: PropsCardReceita) {
  return (
    <View style={style.card}>
      <View style={style.header}>
        <Text style={style.nameRecipe}>{props.name}</Text>
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
  card: {
    width: "50%",
    flex: 1,
    margin: 5,
    borderRadius: 16,
  },
  header: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderBottomRightRadius: 16,
    zIndex: 1,
  },
  cardCover: {
    marginTop: -16,
  },
  nameRecipe: {
    paddingHorizontal: 6,
    paddingRight: 15,
    fontSize: 12,
    fontWeight: "400",
  },
});
