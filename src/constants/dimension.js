import { Dimensions, PixelRatio, Platform } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;

export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const wp = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((DEVICE_WIDTH * elemWidth) / 100);
};

export const hp = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((DEVICE_HEIGHT * elemHeight) / 100);
};

const scale = DEVICE_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (IS_IOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
