import * as React from "react";
import { StyleSheet, View } from "react-native";
import NavBarTop from "../../components/NavBarTop";
import NavBarBottom from "../../components/NavBarBottom";
import { Padding, Color, Border } from "../../GlobalStyles";
import { Chip } from 'react-native-paper';
import ListComponent from '../../components/ListComponent';
import TimelineComponent from '../../components/TimelineComponent';

import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const UserMain = ({navigation, route, options, back}) => {

  return (
    <View style={styles.userMain}>
      
      <NavBarTop navigation={navigation} route={route} options={options} back={back} />
      
      <TabsProvider defaultIndex={0}>
        <Chip mode="outlined">All</Chip>
        <Chip mode="outlined">ToDos</Chip>
        <Chip mode="outlined">Messages</Chip>
        <Chip mode="outlined">Line Notes</Chip>
        <Chip mode="outlined">Costumes</Chip>
        <Chip mode="outlined">Props</Chip>
        <Tabs
          iconPosition="leading"
          style={{ backgroundColor: '#fff' }}
          mode="scrollable"
          showLeadingSpace={false}
        >
          <TabScreen label="All" icon={() => <MaterialCommunityIcons name="sitemap-outline" size={24} color="black" />}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Todos" icon={() => <MaterialIcons name="checklist" size={24} color="black" />}>
            <TimelineComponent />
          </TabScreen>

          <TabScreen label="Messages" icon={() => <AntDesign name="message1" size={24} color="black" />}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Line Notes" icon={() => <MaterialIcons name="notes" size={24} color="black" />}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Costumes" icon={() => <FontAwesome6 name="masks-theater" size={24} color="black" />}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Props" icon={() => <AntDesign name="shoppingcart" size={24} color="black" />}>
            <ListComponent />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <NavBarBottom/>
    </View>
  );
};

const styles = StyleSheet.create({
  userMain: {
    borderRadius: Border.br_5xl,
    borderColor: "#000",
    borderWidth: 4,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    borderStyle: "solid",
    backgroundColor: Color.gray50,
  },
});

export default UserMain;