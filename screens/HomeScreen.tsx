import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Header icon="reorder-three" title="My Notes" />
      <ScrollView>
        <View style={styles.homeContent}>
          <View style={styles.homeItem}>
            <Text style={styles.homeItemTtl}>Home screen</Text>
            <Text style={styles.homeItemTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est, amet reprehenderit magnam sunt velit. Consectetur delectus corporis optio quos, accusantium molestias illum amet eveniet doloribus, nihil minus unde beatae.</Text>
            <TouchableOpacity onPress={() => { console.log("delete!"); }}>
              <Icon style={styles.homeItemIcon} name='trash' size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.homeItem}>
            <Text style={styles.homeItemTtl}>Home screen</Text>
            <Text style={styles.homeItemTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est, amet reprehenderit magnam sunt velit. Consectetur delectus corporis optio quos, accusantium molestias illum amet eveniet doloribus, nihil minus unde beatae.</Text>
            <TouchableOpacity onPress={() => { console.log("delete!"); }}>
              <Icon style={styles.homeItemIcon} name='trash' size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.homeItem}>
            <Text style={styles.homeItemTtl}>Home screen</Text>
            <Text style={styles.homeItemTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est, amet reprehenderit magnam sunt velit. Consectetur delectus corporis optio quos, accusantium molestias illum amet eveniet doloribus, nihil minus unde beatae.</Text>
            <TouchableOpacity onPress={() => { console.log("delete!"); }}>
              <Icon style={styles.homeItemIcon} name='trash' size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.homeItem}>
            <Text style={styles.homeItemTtl}>Home screen</Text>
            <Text style={styles.homeItemTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est, amet reprehenderit magnam sunt velit. Consectetur delectus corporis optio quos, accusantium molestias illum amet eveniet doloribus, nihil minus unde beatae.</Text>
            <TouchableOpacity onPress={() => { console.log("delete!"); }}>
              <Icon style={styles.homeItemIcon} name='trash' size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.homeItem}>
            <Text style={styles.homeItemTtl}>Home screen</Text>
            <Text style={styles.homeItemTxt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem est, amet reprehenderit magnam sunt velit. Consectetur delectus corporis optio quos, accusantium molestias illum amet eveniet doloribus, nihil minus unde beatae.</Text>
            <TouchableOpacity onPress={() => { console.log("delete!"); }}>
              <Icon style={styles.homeItemIcon} name='trash' size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.homeBtn} onPress={() => {
        console.log("Add!");
      }}>
        <Icon style={styles.homeBtnIcon} name='create' size={20} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    marginBottom: 5
  },
  homeItemTxt: {
    marginBottom: 10
  },
  homeItemIcon: {
    alignSelf: "flex-end"
  }
})

export default HomeScreen;