import * as React from "react";
import { StyleSheet, View } from "react-native";
import NavBarTop from "../../components/NavBarTop";
import NavBarBottom from "../../components/NavBarBottom";
import { Padding, Color, Border } from "../../GlobalStyles";
import ListComponent from '../../components/ListComponent';
import TimelineComponent from '../../components/TimelineComponent';

import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import { EverythingIcon_Tab, TodosIcon_Tab, MessagesIcon_Tab, LineNotesIcon_Tab, CostumesIcon_Tab, PropsIcon_Tab  } from '../../components/Icons';

const UserMain = ({navigation, route, options, back}) => {

  return (
    <View style={styles.userMain}>
      
      <NavBarTop navigation={navigation} route={route} options={options} back={back} />
      
      <TabsProvider defaultIndex={0}>
        <Tabs
          iconPosition="leading"
          style={{ backgroundColor: '#fff' }}
          mode="scrollable"
          showLeadingSpace={false}
        >
          <TabScreen label="Everything" icon={EverythingIcon_Tab}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Todos" icon={TodosIcon_Tab}>
            <TimelineComponent />
          </TabScreen>

          <TabScreen label="Messages" icon={MessagesIcon_Tab}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Line Notes" icon={LineNotesIcon_Tab}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Costumes" icon={CostumesIcon_Tab}>
            <ListComponent />
          </TabScreen>

          <TabScreen label="Props" icon={PropsIcon_Tab}>
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