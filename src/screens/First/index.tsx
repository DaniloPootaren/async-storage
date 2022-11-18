import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Button>Navigate to Second Screen</Button>
      <Button mt="5">Logout</Button>
    </View>
  );
};
