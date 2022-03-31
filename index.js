/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TabNavigations from './src/route/TabNavigations';
import Calls from './src/screens/Calls';
import ChatProfile from './src/screens/ChatProfile';
import CompleteProfile from './src/screens/CompleteProfile';
import Contact from './src/screens/Contact';
import Splash from './src/screens/Splash'
import VerificationCode from './src/screens/VerificationCode';
import VerificationSuccessful from './src/screens/VerificationSuccessful';
import WelcomeToHello from './src/screens/WelcomeToHello';
AppRegistry.registerComponent(appName, () => App);
