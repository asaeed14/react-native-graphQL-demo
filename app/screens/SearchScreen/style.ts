/**
 *
 * Styles for SearchScreen
 *
 */

import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  inputHolder: {
    margin: Dimensions.space2x,
  },
  listContainer: {
    flex: 1,
    height: Dimensions.screenHeight,
  },
  list: {
    width: Dimensions.screenWidth,
    height: '100%',
  },
  listContent: {
    paddingBottom: Dimensions.space2x,
    paddingHorizontal: Dimensions.space2x,
    alignItems: 'center',
  },
  itemWrapper: {
    width: Dimensions.screenWidth - Dimensions.space4x,
    margin: Dimensions.space2x,
    padding: Dimensions.space2x,
    borderRadius: Dimensions.borderRadius3x,
    backgroundColor: Colors.white,
    ...elevation(1),
  },
  itemLabel: {
    fontSize: 14,
    color: Colors.textBlack,
    marginVertical: Dimensions.space1x,
  },
  itemName: {
    fontWeight: '600',
  },
  itemDomain: {
    color: Colors.twitter,
  },
  itemWeb: {
    color: Colors.buttonSecondary,
  },
});

export default style;
