import 'react-native-gesture-handler';
import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './routes/appNavigator';

const getFonts = () =>
  Font.loadAsync({
    'sansation': require('./assets/fonts/sansation/Sansation_Regular.ttf'),
    'sansation-bold': require('./assets/fonts/sansation/Sansation_Bold.ttf'),
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  if (appIsReady) {
    return <AppNavigator />;
  } 
  
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }
}
