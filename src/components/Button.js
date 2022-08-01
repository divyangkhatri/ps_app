import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { DEVICE_WIDTH, normalize } from 'Constants/dimension';
import { APP_FONTS } from 'Constants/fonts';

const Button = ({ title, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: DEVICE_WIDTH,
    height: 48,
    paddingHorizontal: normalize(40),
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#000',
    fontFamily: APP_FONTS.SST_BOLD,
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Button;
