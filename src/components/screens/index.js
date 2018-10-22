import {
  makeHot,
  clearCacheFor,
  redraw
} from 'haul/hot';

import { Navigation } from "react-native-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

Navigation.registerComponent('LoginScreen', makeHot(() => LoginScreen, 'LoginScreen'));
Navigation.registerComponent('HomeScreen', makeHot(() => HomeScreen, 'HomeScreen'));


if (module.hot) {
  module.hot.accept(() => {})
  module.hot.accept('./LoginScreen', () => {
    clearCacheFor(require.resolve('./LoginScreen'));
    redraw(() => require('./LoginScreen').default, 'LoginScreen');
  });

  module.hot.accept('./HomeScreen', () => {
    clearCacheFor(require.resolve('./HomeScreen'));
    redraw(() => require('./HomeScreen').default, 'HomeScreen');
  });
}



Navigation.startSingleScreenApp({
  screen: {
    screen: "LoginScreen",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true
    },
    navigatorButtons: {}
  }
});
