import React from 'react';
import SafeAreaView, {ForceInsetProp} from 'react-native-safe-area-view';
import {StyleProp, ViewStyle} from 'react-native';
// Props
interface SafeAreaViewProps {
  forceInset?: ForceInsetProp;
  style?: StyleProp<ViewStyle>;
  children: any;
}

// SafeAreaView Component
export default ({
  forceInset = {top: 'never', bottom: 'never'},
  style,
  children,
}: SafeAreaViewProps) => {
  return <SafeAreaView {...{forceInset, style}}>{children}</SafeAreaView>;
};
