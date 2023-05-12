import {
  View,
  Text,
  Button,
  Pressable,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {FlatList} from 'react-native-gesture-handler';
import TodoItem from '../items/TodoItem';

import FIcons from '../misc/FIcons';
import TodoInputModal from './TodoInputModal';

const NoteScreen = ({navigation}: any) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log(openModal, 'openModal');
  }, [openModal]);

  const styles = StyleSheet.create({
    mainInput: {
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginVertical: 20,
    },
    input: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    addTodo: {
      elevation: 4,
      backgroundColor: 'blue',
      width: 70,
      height: 70,
      borderRadius: 65,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const notes = [
    {
      id: 1,
      title: 'Tech',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui quasi impedit nobis eaque, doloribus laboriosam. Similique pariatur rerum nesciunt quos maiores quaerat natus vitae neque sed iusto. Totam, non?',
    },
    {
      id: 2,

      title: 'Food',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui quasi impedit nobis eaque, doloribus laboriosam. Similique pariatur rerum nesciunt quos maiores quaerat natus vitae neque sed iusto. Totam, non?',
    },
    {
      id: 3,

      title: 'Travel',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui quasi impedit nobis eaque, doloribus laboriosam. Similique pariatur rerum nesciunt quos maiores quaerat natus vitae neque sed iusto. Totam, non?',
    },
    {
      id: 4,

      title: 'Gossip',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui quasi impedit nobis eaque, doloribus laboriosam. Similique pariatur rerum nesciunt quos maiores quaerat natus vitae neque sed iusto. Totam, non?',
    },
    {
      id: 5,

      title: 'Celebrites',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui quasi impedit nobis eaque, doloribus laboriosam. Similique pariatur rerum nesciunt quos maiores quaerat natus vitae neque sed iusto. Totam, non?',
    },
  ];

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <View style={styles.mainInput}>
            <TextInput
              placeholder="Type your search here"
              style={styles.input}
            />
            <FIcons name="search" />
          </View>

          <FlatList
            numColumns={2}
            data={notes}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TodoItem
                key={item.id}
                onPress={() => navigation.navigate()}
                item={item}
              />
            )}
          />
        </View>

        <Pressable
          style={[
            {position: 'absolute', bottom: 10, right: 10},
            styles.addTodo,
          ]}
          // style={styles.addTodo}

          onPress={() => {
            console.log('pressed');
            setOpenModal(true);
          }}>
          <Text style={{color: 'white', fontSize: 40}}>+</Text>
        </Pressable>
      </View>
      <TodoInputModal visible={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default NoteScreen;
