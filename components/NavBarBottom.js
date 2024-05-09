import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import StageRoute from "../screens/resourceRoutes/StageRoute";
import CastCrewRoute from '../screens/resourceRoutes/CastCrewRoute';
import PropCostumeRouteRoute from '../screens/resourceRoutes/PropCostumeRoute';
import DocumentRoute from '../screens/resourceRoutes/DocumentRoute';
import GenieRoute from '../screens/resourceRoutes/GenieRoute';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// routeItem should have at least title and icon
const routeItems = [
  {title: 'Stage', icon: 'theater', routeName: 'StageRoute'}, 
  {title: 'Cast&Crew', icon: 'account-group', routeName: 'CastCrewRoute'}, 
  {title: 'Genie', icon: 'oil-lamp', routeName: 'GenieRoute'}, 
  {title: 'Props&Costumes', icon: 'drama-masks', routeName: 'PropCostumeRoute'}, 
  {title: 'Documents', icon: 'text-box-multiple', routeName: 'DocumentRoute'}
]

// use react native paper bottom navigation to display the bottom navigation bar
const NavBarBottom = () => {

  const navRoutes = routeItems.map(routeItem => ({...routeItem, key: routeItem.title}));

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState(navRoutes);

  const renderScene = BottomNavigation.SceneMap(
    navRoutes.reduce((scenes, navRoute) => {
      scenes[navRoute.title] = navRoute.routeName;
      return scenes;
    }, {})
  );
  
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavBarBottom;