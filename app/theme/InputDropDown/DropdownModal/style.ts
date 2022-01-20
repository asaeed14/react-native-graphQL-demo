import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const style = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.translucentBlack,
    padding: Dimensions.space3x,
  },
  scroll: {
    maxWidth: Dimensions.screenWidth - Dimensions.space6x,
    maxHeight:
      Dimensions.screenHeight -
      Dimensions.space6x -
      Dimensions.statusBarHeight -
      Dimensions.bottomSpacing,
  },
  content: {
    width: '100%',
    backgroundColor: Colors.white,
    padding: Dimensions.space4x,
  },
  overlay: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    position: 'absolute',
  },
  header: {
    backgroundColor: Colors.white,
    fontSize: 20,
    color: Colors.textBlack,
    marginBottom: Dimensions.space2x,
  },
  label: {
    color: Colors.accent,
    fontSize: 16,
  },
});

export default style;
