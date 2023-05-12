import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import InputLabel from '../misc/InputLabel';

const Register = () => {
  const navigate = useNavigation() as any;
  return (
    <View style={styles.container}>
      <InputLabel labelName="Firstname" placeholder="Enter your Firstname" />
      <InputLabel labelName="Lastname" placeholder="Enter your Lastname" />
      <InputLabel labelName="Email" placeholder="Enter your email" />
      <InputLabel labelName="Password" placeholder="Enter your password" />

      <Pressable style={styles.register} onPress={() => ''}>
        <Text style={styles.loginBtnText}>Register</Text>
      </Pressable>

      <View style={styles.linkContainer}>
        <Text style={styles.loginText}>
          Already have an account{' '}
          <Text
            style={styles.signUpLinkColor}
            onPress={() => navigate.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
  },
  signUpLinkColor: {
    color: theme.primary[100],
  },
  linkContainer: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: theme.primary[500],
  },
  inputWrapper: {
    marginBottom: 25,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.primary[500],
    borderRadius: 25,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  register: {
    marginTop: 15,
    backgroundColor: theme.primary[500],

    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  loginBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default Register;
