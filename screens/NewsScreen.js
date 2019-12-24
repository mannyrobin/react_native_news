import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Enter search key..." style={styles.searchBox}/>
      </View>      
    </View>
  );
}

NewsScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
  },
  searchBox: {
    background: 'white',
    borderRadius: 
  },
});
