import React from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import textExtractor from './screens/textExtractor'; // Assuming textExtractor is a screen in the same directory
import userMain from './screens/userMain'; // Assuming userMain is a screen in the same directory


export default function ScriptExtractor() {

    const navigation = useNavigation();

    <SafeAreaView style={styles.welcome}>



    // openai extract file and output information for you/

    Genie extract the script for your show. 
    Here are the casts and crews:

    <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            Looking Good! 
        </Button>


        <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            I need to make some changes. 
        </Button>

    here are the props needed:

        <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            Looking Good! 
        </Button>


        <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            I need to make some changes. 
        </Button>

    Here are costumes needed:

        <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            Looking Good! 
        </Button>


        <Button mode="contained" onPress={() => navigation.navigate(textExtractor)}>
            I need to make some changes. 
        </Button>

    Also create line notes for all the actors and actress in the show.

    







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