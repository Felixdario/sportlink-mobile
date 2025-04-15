import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import App from './App';

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  if (rootTag) {
    rootTag.style.height = '100%';
  }
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
