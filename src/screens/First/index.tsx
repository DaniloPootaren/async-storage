import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';
import {logout} from '../../utils/auth.util';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FirstScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Second')}>
        Navigate to Second Screen
      </Button>
      <Button
        mt="5"
        onPress={() => {
          logout();
        }}>
        Logout
      </Button>
    </View>
  );
};
