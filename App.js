import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import WelcomeToHello from './src/screens/WelcomeToHello';
import VerificationCode from './src/screens/VerificationCode';
import VerificationSuccessful from './src/screens/VerificationSuccessful';
import CompleteProfile from './src/screens/CompleteProfile';
import TabNavigations from './src/route/TabNavigations';
const Stack = createNativeStackNavigator();
const App = props => {
  //const [stateList, setStateList] = useState(ccValue)
  return (

    // <View style={{
    //   height: Dimensions.get('window').height,
    //   width: Dimensions.get('window').width,
    //   backgroundColor: COLORS.whiteFFFFFF,
    //   flex: 1,
    // }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="WelcomeToHello" component={WelcomeToHello} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="VerificationSuccessful" component={VerificationSuccessful} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="TabNavigations" component={TabNavigations} options={{
          headerShown: false,
        }} />


      </Stack.Navigator>

    </NavigationContainer>
    // </View>
  );
};



export default App;