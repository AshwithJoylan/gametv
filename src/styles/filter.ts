import {StyleSheet} from 'react-native';
import {Colors} from '../metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  separator: {
    alignSelf: 'stretch',
    height: 0.4,
    backgroundColor: Colors.LIGHT_TEXT,
  },
});
