import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from 'react-native-paper';
// setup
import Welcome from "./screens/setup/Welcome";
import AddShow from "./screens/setup/AddShow";
import TextExtractor from "./screens/setup/TextExtractor";
//users
import LogIn from './screens/users/LogIn';
import SignUp from './screens/users/SignUp';
import ForgotPassword from './screens/users/ForgotPassword';
import UserMain from './screens/users/UserMain';
// resources
import StageRoute from './screens/resourceRoutes/StageRoute';
import CastCrewRoute from './screens/resourceRoutes/CastCrewRoute';
import GenieRoute from './screens/resourceRoutes/GenieRoute';
import PropCostumeRoute from './screens/resourceRoutes/PropCostumeRoute';
import DocumentRoute from './screens/resourceRoutes/DocumentRoute';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="AddShow" component={AddShow} />
          <Stack.Screen name="TextExtractor" component={TextExtractor}/>

          <Stack.Group initialParams= {{user}}>
            <Stack.Screen name="UserMain" component={UserMain}/>
            <Stack.Screen name="StageRoute" component={StageRoute} options={{ title: 'Stage Design' }}/>
            <Stack.Screen name="CastCrewRoute" component={CastCrewRoute} options={{ title: 'Cast & Crew'}}/> 
            <Stack.Screen name="GenieRoute" component={GenieRoute} options={{ title: 'Hi, Genie!'}}/> 
            <Stack.Screen name="PropCostumeRoute" component={PropCostumeRoute} options={{ title: 'Props & Costumes'}}/> 
            <Stack.Screen name="DocumentRoute" component={DocumentRoute} options={{ title: 'Documents'}}/> 
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

