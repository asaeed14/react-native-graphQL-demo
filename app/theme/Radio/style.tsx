import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Dimensions.space2x,
    paddingHorizontal: Dimensions.space1x,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.textBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    borderRadius: 4,
    width: 8,
    height: 8,
    backgroundColor: Colors.accent,
  },
  square: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: Colors.textBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSquare: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
  },
  label: {
    fontSize: 14,
    color: Colors.textBlack,
  },
  activeLabel: {
    color: Colors.textBlack,
  },
});
