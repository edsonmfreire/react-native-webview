import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

import {URL} from '@env';

const App = () => {
  return (
    <>
      {URL === '' && (
        <View style={styles.view}>
          <Text>No URL found</Text>
          <Text>Configure in the .env file and restart cache</Text>
        </View>
      )}
      {URL !== '' && <WebView source={{uri: URL}} />}
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
