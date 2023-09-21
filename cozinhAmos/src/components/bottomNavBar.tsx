import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const SearchRoute = () => <Text>Buscar</Text>;
const HomeRoute = () => <Text>Home</Text>;
const ProfileRoute = () => <Text>Perfil</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'search',  focusedIcon: 'magnify', unfocusedIcon: 'magnify'},
    { key: 'home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'profile', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    search: SearchRoute,
    home: HomeRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
           navigationState={{ index, routes }}
           onIndexChange={setIndex}
           renderScene={renderScene}
           style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
          />
  );
};

export default BottomNavBar;