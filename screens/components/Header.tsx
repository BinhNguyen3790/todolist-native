import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  icon: string,
  title: string,
  action: string
}

const Header = ({ icon, title, action }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerCont}>
      <TouchableOpacity onPress={() => action ? navigation.goBack() : {}}>
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