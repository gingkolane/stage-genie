import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import StageRoute from "../screens/StageRoute";
import CastcrewRoute from '../screens/CastcrewRoute';
import ItemRoute from '../screens/ItemRoute';
import DocumentRoute from '../screens/resourceRoutes/DocumentRoute';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GenieRoute from '../screens/GenieRoute';


const NavBarBottom = ({timelineData, agendaItems}) => {

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'stage', title: 'Stage', focusedIcon: 'theater', unfocusedIcon: 'theater-outline' },
    { key: 'cast&Crew', title: 'Cast&Crew', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline'},
    { key: 'genie', title: 'Genie', focusedIcon: 'oil-lamp', unfocusedIcon: 'oil-lamp-outline'},
    { key: 'props&Costumes', title: 'Props&Costumes', focusedIcon:'drama-masks', unfocusedIcon: 'drama-masks-outline'},
    { key: 'documents', title: 'Documents', focusedIcon: 'text-box-multiple', unfocusedIcon: 'text-box-multiple-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    // can add data to each route, for example, stage: () => <StageRoute data={timelineData} />, can add data to each route
    stage: () => <StageRoute/>,
    cast_crew: () => <CastcrewRoute/>,
    genie: () => <GenieRoute/>,
    Item: () => <ItemRoute/>,
    Document: () => <DocumentRoute/>
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavBarBottom;