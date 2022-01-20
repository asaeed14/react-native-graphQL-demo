import { Platform } from 'react-native';
// return `box-shadow: 0 ${e * 5}px ${e * 10}px -${e * 5}px rgba(0, 0, 0, 0.15)`;

export default function elevation(level = 1, showBorders = true): object {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      return {
        elevation: level * 2,
      };
    }
    if (showBorders) {
      return {
        borderWidth: 1,
        borderColor: '#CECECF',
        overflow: 'hidden',
      };
    }
  }
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000000',
      shadowOpacity: level * 0.08,
      shadowRadius: level * 4,
      shadowOffset: {
        width: 0,
        height: level * 2,
      },
      overflow: 'visible',
    };
  }
  return {};
}
