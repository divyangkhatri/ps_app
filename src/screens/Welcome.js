import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { PSImageBackground, Button } from 'Components';
import { APP_FONTS } from 'Constants/fonts';

const Welcome = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PSImageBackground>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <SafeAreaView style={styles.main}>
        <View style={styles.main}>
          <View style={styles.main} />
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/app/ps_app.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome to Playstation App</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.descriptionText}>Let's go!</Text>
            <Button title={'Sign In'} onPress={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    </PSImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
  descriptionText: {
    fontFamily: APP_FONTS.SST_MEDIUM,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: APP_FONTS.SST_MEDIUM,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Welcome;
