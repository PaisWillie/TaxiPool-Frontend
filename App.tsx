import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/views/login';
import RouteConfirmPage from './src/views/route_confirm';
import RegistrationPage from './src/views/registration';
import DestinationSelectPage from './src/views/destination_select';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  statusBarColor: 'rgba(0,0,0,0)',
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DestinationSelect"
          component={DestinationSelectPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="RouteConfirm"
          component={RouteConfirmPage}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
