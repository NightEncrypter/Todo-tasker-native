import {
  View,
  Text,
  Modal,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  NativeSyntheticEvent,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../theme';
import RoundedIButton from '../misc/RoundedIButton';
type Props = {
  visible: boolean;
  onClose: () => void;
};

const TodoInputModal = ({visible, onClose}: Props) => {
  const [text, setText] = useState({
    title: '',
    desc: '',
  });
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleText = (val: string, keyName: string) => {
    // console.log(val, 'val');
    setText({
      ...text,
      [keyName]: val,
    });
  };

  const handleSubmit = () => {
    if (!text.desc.trim() && !text.title.trim()) {
      onClose();
      return;
    }
  };

  useEffect(() => {
    console.log(visible, 'text');
  }, [visible]);

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={styles.createTaskContainer}>
            <Text style={styles.createTaskHeading}>Create a task</Text>
          </View>
          <View style={styles.mainInput}>
            <TextInput
              onChangeText={text => handleText(text, 'title')}
              placeholder="Title"
              style={[styles.input]}
            />
          </View>
          <View style={styles.mainInput}>
            <TextInput
              onChangeText={text => handleText(text, 'desc')}
              placeholder="Description"
              style={[styles.input, styles.desc]}
              multiline
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <RoundedIButton
              name="check"
              onPress={handleSubmit}
              size={20}
              style={{
                width: 40,
                height: 40,
                backgroundColor: theme.primary[100],
              }}
            />
            <RoundedIButton
              onPress={handleSubmit}
              name="x"
              style={{
                width: 40,
                height: 40,
                backgroundColor: theme.primary[100],
              }}
            />
          </View>
        </View>
        {/* <TextInput style={ [styles.input,styles.title]} /> */}
        {/* <TextInput style={ [styles.input,styles.desc]} /> */}

        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  createTaskHeading: {
    color: theme.primary[500],
    fontSize: 30,
    textAlign: 'center',
  },
  createTaskContainer: {
    marginBottom: 25,
  },
  input: {
    flexGrow: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  mainInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  desc: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    // backgroundColor: 'red',
    zIndex: -1,
  },
});

export default TodoInputModal;
