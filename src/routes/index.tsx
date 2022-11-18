import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {FirstScreen} from '../screens/First';
import {SecondScreen} from '../screens/Second';
import {isAuthenticated} from '../utils/auth.util';
import {useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

export const Router = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    async function initAuthentication() {
      const auth = await isAuthenticated();
      setAuthenticated(auth);
    }
    initAuthentication();
    //@Dev: To make authentication system more reactive to token change,
    // different methodology should be used. For example Redux Persist / combination of encrypted async storage
  }, [authenticated]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {authenticated ? (
          <>
            <Stack.Screen name="First" component={FirstScreen} />
            <Stack.Screen name="Second" component={SecondScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
