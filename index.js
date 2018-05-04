import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import { AppRegistry } from 'react-native';
import App from './app/App';
AppRegistry.registerComponent('RNSafeAreaViewExample', () => App);
