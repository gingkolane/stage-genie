import { View } from 'react-native';
import { Button,Title, Paragraph,Text} from 'react-native-paper';
import { TabsProvider, Tabs, TabScreen, useTabIndex,useTabNavigation,} from 'react-native-paper-tabs';

import TimelineComponent from './TimelineComponent';
import ListComponent from './ListComponent';
import MapComponent from './MapComponent';
import ExpandableCalendar from "./CalendarsComponents/screens/expandableCalendarScreen"

  // const TabNames = {[
  //   { label: 'By Appointments', icon: 'Conditions', viewType: timeline},
  //   { label: 'By Names', icon: 'doctor', viewType: list}
  // ]}

const ViewTabs = () => {

  return (
    <TabsProvider
      defaultIndex={0}
      // onChangeIndex={handleChangeIndex} optional
    >
      <Tabs 
        // uppercase={false} // true/false | default=true (on material v2) | labels are uppercase
        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
        iconPosition="leading" // leading, top | default=leading
        style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
        // dark={false} // works the same as AppBar in react-native-paper
        // theme={} // works the same as AppBar in react-native-paper
        mode="scrollable" // fixed, scrollable | default=fixed
        showLeadingSpace={false} //  (default=true) show leading space in scrollable tabs inside the header
        // disableSwipe={false} // (default=false) disable swipe to left/right gesturesmode="scrollable">
        >
        <TabScreen label="By Appointments" icon="calendar">
          <TimelineComponent />
        </TabScreen>

        <TabScreen label="By Names" icon="doctor">
          <ListComponent />
        </TabScreen>

      </Tabs>
    </TabsProvider>
  )
}

export default ViewTabs;

  