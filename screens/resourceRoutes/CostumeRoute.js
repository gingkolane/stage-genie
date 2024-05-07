import React from 'react';
import { Chip } from 'react-native-paper';
import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import ListComponent from '../../components/ListComponent';

const CostumeRoute = ({data}) => {
  return (
    <TabsProvider defaultIndex={0}>
      <Chip mode="outlined">Chip 1</Chip>
      <Chip mode="outlined">Chip 2</Chip>
      <Chip mode="outlined">Chip 3</Chip>
      <Chip mode="outlined">Chip 4</Chip>
      <Tabs
        iconPosition="leading"
        style={{ backgroundColor: '#fff' }}
        mode="scrollable"
        showLeadingSpace={false}
      >
        <TabScreen label="All" icon="calendar">
          <ListComponent />
        </TabScreen>

        <TabScreen label="By Scene" icon="calendar">
          <ListComponent />
        </TabScreen>

        <TabScreen label="By Character" icon="calendar">
          <ListComponent />
        </TabScreen>

        <TabScreen label="By Status" icon="calendar">
          <ListComponent />
        </TabScreen>
      </Tabs>
    </TabsProvider>
  )
};

export default CostumeRoute;