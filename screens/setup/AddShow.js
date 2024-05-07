import React from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import textExtractor from './screens/setupShow/textExtractor'; // Assuming textExtractor is a screen in the same directory
import userMain from './screens/userMain'; // Assuming userMain is a screen in the same directory


export default function AddShow() {

    const navigation = useNavigation();

    <SafeAreaView style={styles.welcome}>

    // if stage manager, upload a script, deploy the script.
    maybe use multer


        <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            Depoly the script 
        </Button>


        // if others, user a code for a existing show. Form or text input.

        <Button mode="contained" onPress={() => navigation.navigate(userMain)}>
        Go To the Show
        </Button>

</SafeAreaView>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
      error: {
        color: 'red',
      },
      forgotPassword: {
        textAlign: 'right',
        marginTop: 15,
        color: 'blue',
      }
});
}