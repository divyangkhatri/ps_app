import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from 'Screens/Welcome';
import Login from 'Screens/Login';
import Register from 'Screens/Register';
import { IS_IOS } from '../constants/dimension';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          mode={'modal'}
          headerMode={'none'}
          screenOptions={
            IS_IOS
              ? {
                  headerShown: false,
                  ...TransitionPresets.ModalPresentationIOS,
                  cardOverlayEnabled: true,
                }
              : {
                  headerShown: false,
                  ...TransitionPresets.ModalSlideFromBottomIOS,
                }
          }>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;
