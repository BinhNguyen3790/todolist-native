import React from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const AddScreen = () => {
  return (
    <View>
      <Header icon="arrow-back" title="Add Notes" action="Home" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.formGroup}>
            <View style={styles.formItem}>
              <Text style={styles.formTitle}>Enter Title:</Text>
              <TextInput style={styles.formInput} placeholder='Title' placeholderTextColor="white"></TextInput>
            </View>
            <View style={styles.formItem}>
              <Text style={styles.formTitle}>Enter Title:</Text>
              <TextInput style={[styles.formInput, styles.formInputLg]} placeholder='Description' placeholderTextColor="white" multiline={true}></TextInput>
            </View>
          </View>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.btnGroupItem} onPress={() => {
              console.log("add!");
            }}>
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