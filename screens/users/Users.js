import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { List, Text, Switch } from 'react-native-paper';

const Users = () => {
  const navigation = useNavigation();

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.users}>
      <Text variant="headlineSmall">Choose someone to begin:</Text>

      <List.Item
          title="Geyi"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress = {() => navigation.navigate('UserMain')}
        />

      <List.Item
          title="Oliver"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress = {() => navigation.navigate('UserMain')}
        />

      <List.Item
          title="Lizzie"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress = {() => navigation.navigate('UserMain')}
        />

    <Text variant="headlineSmall" >Remember my choice</Text>

    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />

    <Text variant="bodyLarge" >You can change this later in account setting</Text>

    <Text variant="bodyLarge" >You can switch at any time by tapping the patient name at the top left of the screen.</Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  users: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});