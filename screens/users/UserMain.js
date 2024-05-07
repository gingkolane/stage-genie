import * as React from "react";
import { StyleSheet, View } from "react-native";
import NavBarTop from "../../components/NavBarTop";
import NavBarBottom from "../../components/NavBarBottom";
import { Padding, Color, Border } from "../GlobalStyles";
import { Chip } from 'react-native-paper';
import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import ListComponent from '../../components/ListComponent';

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
          <TabScreen label="All" icon="calendar">
            <ListComponent />
          </TabScreen>

          <TabScreen label="Todos" icon="calendar">
            <TimelineComponent />
          </TabScreen>

          <TabScreen label="Messages" icon="calendar">
            <ListComponent />
          </TabScreen>

          <TabScreen label="Line Notes" icon="calendar">
            <ListComponent />
          </TabScreen>

          <TabScreen label="Costumes" icon="calendar">
            <ListComponent />
          </TabScreen>

          <TabScreen label="Props" icon="calendar">
            <ListComponent />
          </TabScreen>
        </Tabs>
      </TabsProvider>
  )
};

      <NavBarBottom timelineData={timelineData} agendaItems={agendaItems} />

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