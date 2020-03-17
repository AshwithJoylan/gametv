import {Spacing, Typography} from '../metrics';
import {StyleSheet} from 'react-native';
import {Colors} from '../metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  bottom: {
    paddingTop: Spacing.SIZE_30,
    paddingBottom: Spacing.SIZE_30,
    alignSelf: 'stretch',
    marginHorizontal: Spacing.SIZE_20,
  },
  title: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_500,
    color: 'white',
    marginBottom: Spacing.SIZE_30,
  },
  top: {
    flex: 1,
    marginTop: Spacing.SIZE_5,
  },
});
