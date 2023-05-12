import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native';
import React, {FC} from 'react';
import {theme} from '../theme';

type CustomProps = {
  labelName: string;
  //   onChangeText: (text: string) => void;
  //   placeholderText: string;
};

type Props = CustomProps & TextInputProps;
const InputLabel: FC<Props> = ({labelName, ...props}) => {
  const styles = StyleSheet.create({
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
  });
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{labelName}</Text>

      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default InputLabel;
