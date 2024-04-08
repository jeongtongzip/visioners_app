import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraMain from './screens/CameraMain';
import Domestic from './screens/Domestic';
import International from './screens/International';
import MainScreen from './screens/MainScreen';
import Person from './screens/Person';
import Introduce from './screens/Introduce';
import * as SplashScreen from 'expo-splash-screen';

// 스플래시 화면이 자동으로 숨겨지지 않도록 방지
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    // 7초 후에 스플래시 화면 숨기기
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 7000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CameraMain" component={CameraMain} />
        <Stack.Screen name="Domestic" component={Domestic} />
        <Stack.Screen name="International" component={International} />
        <Stack.Screen name="Person" component={Person} />
        <Stack.Screen name="Introduce" component={Introduce} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
