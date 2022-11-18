import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Button,
  Input,
} from 'native-base';
import {useFormik} from 'formik';
import {Login} from './types/login.type';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const LoginScreen = () => {
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: values => Alert.alert('Test', JSON.stringify(values)),
  });
  return (
    <View style={styles.container}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl isInvalid={!!formik.errors?.email}>
              <FormControl.Label>Email Address</FormControl.Label>
              <Input
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
              />
            </FormControl>
            <FormControl isInvalid={!!formik.errors?.password}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                value={formik.values.password}
                type="password"
                onChangeText={formik.handleChange('password')}
              />
            </FormControl>
            <Button mt="2" onPress={formik.submitForm}>
              Login
            </Button>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};
