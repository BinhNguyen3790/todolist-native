import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/MyNoteProvider';

const AddScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { notes, setNotes, getNotes }: any = useNotes();

  // const save = async () => {
  //   let formData = {
  //     title,
  //     content,
  //     time: Date.now()
  //   }
  //   try {
  //     await AsyncStorage.setItem('notes', JSON.stringify(formData));
  //     naviagation.navigate('Home')
  //   }
  //   catch { }
  // }

  const save = async () => {
    let formData = {
      title,
      content,
      time: Date.now()
    }
    const pushNotes = [...notes, formData];
    setNotes(pushNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(pushNotes));
    navigation.navigate("Home")
  }

  return (
    <View>
      <Header icon="arrow-back" title="Add Notes" action="Home" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.formGroup}>
            <View style={styles.formItem}>
              <Text style={styles.formTitle}>Enter Title:</Text>
              <TextInput style={styles.formInput} placeholder='Title' placeholderTextColor="white" onChangeText={(value)=>setTitle(value)}></TextInput>
            </View>
            <View style={styles.formItem}>
              <Text style={styles.formTitle}>Enter Title:</Text>
              <TextInput style={[styles.formInput, styles.formInputLg]} placeholder='Description' placeholderTextColor="white" multiline={true} onChangeText={(value) => setContent(value)}></TextInput>
            </View>
          </View>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.btnGroupItem} onPress={() => save()}>
              <Text style={styles.btnGroupTxt}>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "black",
    height: "100%"
  },
  btnGroup: {
    flexDirection: "column",
    paddingHorizontal: 25,
    alignItems: "center",
    marginTop: 10
  },
  btnGroupItem: {
    backgroundColor: "orange",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5
  },
  btnGroupTxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  formGroup: {
    paddingTop: 50,
  },
  formItem: {
    paddingHorizontal: 25,
    marginBottom: 20
  },
  formTitle: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "orange"
  },
  formInput: {
    borderColor: 'orange',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "orange",
    color: "white"
  },
  formInputLg: {
    minHeight: 300, textAlignVertical: 'top'
  }
})

export default AddScreen;