import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const AddScreen = () => {
  return (
    <View>
      <Header icon="arrow-back" title="Add Notes" action="Home" />

    </View>
  )
}

const styles = StyleSheet.create({

})

export default AddScreen;