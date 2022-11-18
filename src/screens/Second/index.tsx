import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, View} from 'native-base';
import {logout} from '../../utils/auth.util';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SecondScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('First')}>
        Navigate to First Screen
      </Button>
      <Button mt="5" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};
