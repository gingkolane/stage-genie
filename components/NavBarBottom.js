import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import StageRoute from "../screens/resourceRoutes/StageRoute";
import CastCrewRoute from '../screens/resourceRoutes/CastCrewRoute';
import PropCostumeRouteRoute from '../screens/resourceRoutes/PropCostumeRoute';
import DocumentRoute from '../screens/resourceRoutes/DocumentRoute';
import GenieRoute from '../screens/resourceRoutes/GenieRoute';

const NavBarBottom = ({timelineData, agendaItems}) => {

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'stage', title: 'Stage', focusedIcon: 'theater', unfocusedIcon: 'theater-outline' },
    { key: 'cast_crew', title: 'Cast&Crew', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline'},
    { key: 'genie', title: 'Genie', focusedIcon: 'oil-lamp', unfocusedIcon: 'oil-lamp-outline'},
    { key: 'prop_costume', title: 'Props&Costumes', focusedIcon:'drama-masks', unfocusedIcon: 'drama-masks-outline'},
    { key: 'document', title: 'Documents', focusedIcon: 'text-box-multiple', unfocusedIcon: 'text-box-multiple-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
      stage: () => <StageRoute/>,
      cast_crew: () => <CastCrewRoute/>,
      genie: () => <GenieRoute/>,
      prop_costume: () => <PropCostumeRoute/>,
      document: () => <DocumentRoute/>
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