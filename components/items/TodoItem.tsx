import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import {Pressable} from 'react-native';
import FIcons from '../misc/FIcons';
import RoundedIButton from '../misc/RoundedIButton';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  onPress: () => void;

  item: {
    title: string;
    desc: string;
  };
};
const TodoItem = ({item, onPress}: Props) => {
  const width = Dimensions.get('window').width - 40;

  const styles = StyleSheet.create({
    container: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5,
      position: 'relative',
      padding: 10,
      borderRadius: 10,
      width: width / 2 - 10,
      backgroundColor: theme.primary[100],
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      marginBottom: 8,
    },
    desc: {
      fontSize: 12,
      //   padding: 8,
      color: '#fff',
    },
  });
  const {title, desc} = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            justifyContent: 'flex-end',
          }}>
          <RoundedIButton
            onPress={() => console.log('trash')}
            style={{
              backgroundColor: '#FF033E',
            }}
            name={'trash'}
          />

          <RoundedIButton
            onPress={() => console.log('edit-2')}
            style={{
              backgroundColor: 'green',
            }}
            name={'edit-2'}
          />
          {/* <Icon.Button
            name="trash"
            size={10}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: 'red',
              borderRadius: 25,
              width: 35,
              height: 35,
            }}
          /> */}
        </View>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text numberOfLines={3} style={styles.desc}>
        {desc}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
