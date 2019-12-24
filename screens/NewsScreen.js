import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import Swiper from 'react-native-page-swiper'

import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Enter search key..." style={styles.searchbox}/>
        <Swiper style={menuicons.wrapper} pager={true} activeDotColor={"white"}>
          <View style={menuicons.slide1}>
            <View style={{flex: 1, flexDirection: "row", width: '100%'}}>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: "row", width: '100%'}}>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
            </View>
          </View>
          <View style={menuicons.slide2}>
            <View style={{flex: 1, flexDirection: "row", width: '100%'}}>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: "row", width: '100%'}}>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
              <View style={menuicons.item}>
                <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
                <MonoText style={menuicons.text}>Такси</MonoText>
              </View>
            </View>            
          </View>
          <View style={menuicons.slide3}>
            <View style={menuicons.item}>
              <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
              <MonoText style={menuicons.text}>Такси</MonoText>
            </View>
            <View style={menuicons.item}>
              <Image source={require("../assets/images/news_header_icon/news.png")} style={menuicons.image}/>
              <MonoText style={menuicons.text}>Такси</MonoText>
            </View>
          </View>
        </Swiper>
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
  searchbox: {
    backgroundColor: 'white',

    marginRight: '10%',
    marginLeft: '10%',
    marginTop: 15,

    paddingTop:10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,

    fontSize: 25,
    borderRadius: 5,
  },
});

const menuicons = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    height: 400,
    padding: 30,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    height: 400,
  },
  slide3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'none',
    height: 400,
  },
  item: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
  }
})