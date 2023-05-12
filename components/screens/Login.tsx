import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import InputLabel from '../misc/InputLabel';
import {ScrollView} from 'react-native-gesture-handler';

const Login = () => {
  const navigate = useNavigation() as any;
  return (
    <ScrollView style={styles.container}>
      <InputLabel labelName="Email" placeholder="Enter your email" />

      <InputLabel labelName="Password" placeholder="Enter your password" />

      <Pressable style={styles.submit} onPress={() => ''}>
        <Text style={styles.loginBtnText}>Login</Text>
      </Pressable>

      <View style={styles.linkContainer}>
        <Text style={styles.signUpText}>
          Dont't have an account{' '}
          <Text
            style={styles.signUpLinkColor}
            onPress={() => navigate.navigate('Register')}>
            SignUp
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  signUpText: {
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
  submit: {
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

export default Login;
