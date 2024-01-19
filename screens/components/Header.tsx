import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

type HeaderProps = {
  icon: string,
  title: string
}

const Header = ({ icon, title }: HeaderProps) => {
  return (
    <View style={styles.headerCont}>
      <TouchableOpacity onPress={() => {
        console.log("hello");
      }}>
        <Icon style={styles.headerIcon} name={icon} size={20} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerCont: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerIcon: {
    fontSize: 30
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20
  }
})

export default Header;