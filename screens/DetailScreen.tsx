import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/MyNoteProvider';

const DetailScreen = ({ navigation }: any) => {

  const { notes, setNotes, getNotes }: any = useNotes();

  return (
    <View style={styles.content}>
      <Header icon="arrow-back" title="Detail Notes" action="Home" />
      {/* <ScrollView> */}
      <View style={styles.homeContent}>
        <FlatList data={notes} renderItem={({ item }) =>
          <View style={styles.homeItem}>
            <Text style={styles.homeItemTtl}>{item.title}</Text>
            <Text style={styles.homeItemTxt}>{item.content}</Text>
            <TouchableOpacity onPress={() => { console.log("delete!"); }}>
              <Icon style={styles.homeItemIcon} name='trash' size={20} />
            </TouchableOpacity>
          </View>}
        />

      </View>
      {/* </ScrollView> */}
      <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate("Add")}>
        <Icon style={styles.homeBtnIcon} name='create' size={20} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: "100%",
    backgroundColor: "black",
  },
  homeContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 130,
    backgroundColor: "black",
    height: "100%",
    position: "relative",
    flexDirection: "column"
  },
  homeBtn: {
    borderRadius: 50,
    backgroundColor: "#c70000",
    width: 50,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    right: 15
  },
  homeBtnIcon: {
    color: "white"
  },
  homeItem: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 10,
    marginBottom: 20
  },
  homeItemTtl: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 5,
    color: "white"
  },
  homeItemTxt: {
    marginBottom: 10,
    color: "white"
  },
  homeItemIcon: {
    alignSelf: "flex-end",
    color: "white"
  }
})

export default DetailScreen;