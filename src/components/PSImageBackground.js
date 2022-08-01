import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const PSImageBackground = props => {
  return (
    <ImageBackground
      style={styles.main}
      resizeMode={'stretch'}
      source={require('../assets/app/ps_background.jpg')}>
      {props.children}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default PSImageBackground;
