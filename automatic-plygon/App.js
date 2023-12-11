// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import MainView from './src/main/components/MapView/MainView';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MainView />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

//Screens
import ChooseLocation from './src/Screens/ChooseLocation';
import Home from './src/Screens/Home';


const App = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
      <FlashMessage
        position="top"
      />
    </NavigationContainer>
  );
};

export default App;
