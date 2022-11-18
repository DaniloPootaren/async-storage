import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
      <Text>First Screen</Text>
    </View>
  );
};
