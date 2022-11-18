import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, View} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Button>Navigate to Second Screen</Button>
      <Button mt="5">Logout</Button>
    </View>
  );
};
