import React from 'react';
import { View } from 'react-native';
import { Appbar, Menu, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getHeaderTitle } from '@react-navigation/elements';
import { SearchBar } from 'react-native-screens';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NavBarTop({
  navigation,
  back,
  route,
}) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // const title = "Liz's Stuff";
  const title = getHeaderTitle(route) || 'Failed It!';

  return (
    <Appbar.Header style={{backgroundColor: '#FFF', justifyContent: "space-between",alignItems: "buttom", height: 50}}>
      <Appbar.BackAction onPress={navigation.goBack} style={{ height: 20 }}/>
        <Menu 
          anchor={<Appbar.Content 
                    title={<View style={{  flexDirection: 'row', alignItems: 'center'}}>
                            <Text variant="headlineSmall">{title}</Text>
                            <Text>  </Text>
                            <Icon name="chevron-down" size={20} color="#000" />
                          </View>} 
                    onPress={openMenu}
                  />}
          style={{marginTop: 150}}
          visible={visible}
          onDismiss={closeMenu}
        >
            <Menu.Item
              onPress={() => {navigation.navigate('LogIn')}}
              title="Oliver"
            />
            <Menu.Item
              onPress={() => { navigation.navigate('SignUp') }}
              title="Lizzie"
            />
            <Menu.Item
              onPress={() => {
                console.log('Option 3 was pressed');
              }}
              title="Option 3"
              disabled
            />
        </Menu>

      <Appbar.Action icon="magnify" style={{height:20}} onPress={() => { }}/>
    </Appbar.Header>
  );
}
