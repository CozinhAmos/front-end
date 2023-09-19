import { Avatar, Card } from "react-native-paper";

export default function CardPostReceita() {
    return (
    <Card>
        <Card.Title
            title='Mac Cheese'
            subtitle='Julia Amaral'
            left={(props) => <Avatar.Image size={55} source={require('../assets/logo.png')} />}
        />
        <Card.Content>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
    );
};
