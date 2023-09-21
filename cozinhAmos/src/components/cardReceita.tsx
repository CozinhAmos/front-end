import { Avatar, Card } from "react-native-paper";

export default function CardReceita() {
    return (
    <Card>
        <Card.Title
            title='Mac Cheese'
        />
        <Card.Content>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
    );
};
