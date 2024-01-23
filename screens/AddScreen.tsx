import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const AddScreen = () => {
  return (
    <View>
      <Header icon="arrow-back" title="Add Notes" action="Home" />
      <View style={styles.formGroup}>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Enter Title:</Text>
          <TextInput style={styles.formInput} placeholder='Title'></TextInput>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formTitle}>Enter Title:</Text>
          <TextInput style={[styles.formInput, styles.formInputLg]} placeholder='Description' multiline={true}></TextInput>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formGroup: {
    paddingTop: 50,
    backgroundColor: "black",
    height: "100%"
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
    backgroundColor: "orange"
  },
  formInputLg: {
    minHeight: 300, textAlignVertical: 'top'
  }
})

export default AddScreen;