import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeBaseProvider, Flex, VStack, Button} from 'native-base';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Flex height="full">
          <VStack padding="2" flex={1} justifyContent="center">

            <Button>TEST</Button>
          </VStack>
        </Flex>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
