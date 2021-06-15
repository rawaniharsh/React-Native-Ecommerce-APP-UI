import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from './screens/Login/Login';
import OtpVerificationScreen from './screens/Login/OtpVerification';
import OnBoardScreen from './screens/OnBoardScreen';

const LoginStack = createStackNavigator({
    OnBoard: OnBoardScreen,
    Login: LoginScreen,
    OtpVerification: OtpVerificationScreen
});

export default createAppContainer(LoginStack);