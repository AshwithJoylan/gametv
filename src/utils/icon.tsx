import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import {StyleProp, TextStyle} from 'react-native';

interface IconProps {
  /**
   * @description Type of the icon
   * @default Ion
   * @type {('Ion'
   *     | 'Material'
   *     | 'MaterialCommunity'
   *     | 'SimpleLine'
   *     | 'AntDesign'
   *     | 'Evil'
   *     | 'Entypo'
   *     | 'Feather'
   *     | 'FontAwesome'
   *     | 'FontAwesome5'
   *     | 'Fontisto'
   *     | 'Oct')}
   * @memberof IconProps
   */
  type?:
    | 'Ion'
    | 'Material'
    | 'MaterialCommunity'
    | 'SimpleLine'
    | 'AntDesign'
    | 'Evil'
    | 'Entypo'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Oct';
  /**
   * @description Size of the Icon
   * @type {number}
   * @memberof IconProps
   */
  size?: number;
  /**
   * @description Color of the icon
   * @default BLACK
   * @type {string}
   * @memberof IconProps
   */
  color?: string;
  style?: StyleProp<TextStyle>;
  /**
   * @description Icon Name
   * @type {string}
   * @memberof IconProps
   */
  name: string;
}

export default ({type, color, size, style, name}: IconProps) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign {...{color, size, style, name}} />;
    case 'Entypo':
      return <Entypo {...{color, size, style, name}} />;
    case 'Evil':
      return <EvilIcons {...{color, size, style, name}} />;
    case 'Feather':
      return <Feather {...{color, size, style, name}} />;
    case 'FontAwesome':
      return <FontAwesome {...{color, size, style, name}} />;
    case 'FontAwesome5':
      return <FontAwesome5 {...{color, size, style, name}} />;
    case 'Fontisto':
      return <Fontisto {...{color, size, style, name}} />;
    case 'Material':
      return <MaterialIcons {...{color, size, style, name}} />;
    case 'MaterialCommunity':
      return <MaterialCommunityIcons {...{color, size, style, name}} />;
    case 'Oct':
      return <Octicons {...{color, size, style, name}} />;
    case 'SimpleLine':
      return <SimpleLineIcons {...{color, size, style, name}} />;
    default:
      return <IonIcons {...{color, size, style, name}} />;
  }
};
