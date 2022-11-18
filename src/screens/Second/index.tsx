import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
      <Text>Second Screen</Text>
    </View>
  );
};
