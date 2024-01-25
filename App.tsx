import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyNoteProvider from './context/MyNoteProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <MyNoteProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Add" component={AddScreen} />
          </Stack.Navigator>
        </MyNoteProvider>
      </NavigationContainer>
    </>
  )
}

export default App;