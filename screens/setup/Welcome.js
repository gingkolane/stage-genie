import * as React from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

import SignUp from "../users/SignUp";
import LogIn from "../users/LogIn";
// Every step up in the folder structure is a .. followed by a /.
import logo from "../../assets/adaptive-icon.png";

export default function Welcome() {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.welcome}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={logo}
        />
        {/* <Text style={[styles.appName, { marginTop: 10 }]}>你好吗</Text>  */}
      </View>

      <View style={styles.buttonContainer}>

        <Button mode="contained" onPress={() => navigation.navigate(textExtracter)}>
          Sign Up
        </Button>

        <Button mode="contained" onPress={() => navigation.navigate(LogIn)}>
          Log In
        </Button>
        
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 650,
    width: 393,
    position: "absolute",
  },

  logoIcon: {
    top: 209,
    left: 53,
    width: 307,
    height: 200,
    justifyContent: 'center',
  },

  appName: {
    fontSize: 48,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "roboto",
    color: "#0078ad",
    textAlign: "center",
    top: 500,
    left: 53,
    width: 307,
    height: 108,
    position: "absolute",
  },

  welcome: {
    backgroundColor: "#ffcc00",
    flex: 1,
    height: 852,
    width: "100%",
  },
});