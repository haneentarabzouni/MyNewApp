import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// استيراد الصفحات
import WelcomeScreen from './WelcomeScreen';
import RegisterScreen from './RegisterScreen';
import SignUpOtpScreen from './SignUpOtpScreen';   
import LoginScreen from './LoginScreen';
import LoginOtpScreen from './LoginOtpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SignUpOtp" component={SignUpOtpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginOtp" component={LoginOtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}