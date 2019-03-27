import { createStackNavigator, createAppContainer } from 'react-navigation';
//LOCAL
import Splash from './src/pages/Splash';
import Home from './src/pages/Home';

const stackNavigator = createStackNavigator({
  Splash: { screen: Splash },
  Home: { screen: Home }
}, { headerMode: 'none', initialRouteName: 'Splash' });

export default createAppContainer(stackNavigator);