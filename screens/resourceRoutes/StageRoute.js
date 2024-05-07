import React from 'react';
import { Chip } from 'react-native-paper';
import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import ListComponent from '../../components/ListComponent';

const StageRoute = ({data}) => {

  return (
    <TabsProvider defaultIndex={0}>
      <Chip mode="outlined">All</Chip>
      <Chip mode="outlined">By Scene</Chip>
      <Chip mode="outlined">By Character</Chip>
      <Chip mode="outlined">By Status</Chip>
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

export default StageRoute;