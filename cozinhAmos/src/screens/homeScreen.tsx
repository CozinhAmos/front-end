import { ScrollView, View } from "react-native";
import AppBar from "../components/appBar";
import CardPostReceita from "../components/cardPostReceita";
import BottomNavBar from "../components/bottomNavBar";
import { Appbar } from "react-native-paper";

export default function HomeScreen() {
    return (
        <ScrollView >
            <View>
                <Appbar.Header mode='center-aligned'>
                    <Appbar.Content title='CozinhAmos' />
                    
                </Appbar.Header>
            </View>

            <View style={{ margin: 20, justifyContent: 'space-evenly' }}>
                <CardPostReceita></CardPostReceita>
                <CardPostReceita></CardPostReceita>
                <CardPostReceita></CardPostReceita>
                <CardPostReceita></CardPostReceita>
                <CardPostReceita></CardPostReceita>
                <CardPostReceita></CardPostReceita>
            </View>
            <View>
                <BottomNavBar></BottomNavBar>
            </View>
        </ScrollView>
    )
}