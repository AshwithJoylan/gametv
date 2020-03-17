import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

import {Icon} from '../../utils';
import {Colors, Spacing, Typography} from '../../metrics';
// Props
interface InfoBarProps {
  downloads: number;
  likes: number;
  date: number | string;
}

const toValue = (number: number) => {
  // Nine Zeroes for Billions
  return Math.abs(number) >= 1.0e9
    ? Math.abs(number) / 1.0e9 + 'B'
    : // Six Zeroes for Millions
    Math.abs(number) >= 1.0e6
    ? String(Math.abs(number) / 1.0e6).substring(0, 4) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(number) >= 1.0e3
    ? Math.abs(number) / 1.0e3 + 'K'
    : Math.abs(number);
};

// InfoBar Component
export default ({downloads, likes, date}: InfoBarProps) => {
  const renderItem = (type: any, name: string, value: any) => (
    <View style={styles.subContainer}>
      <Icon
        {...{name, type}}
        style={name === 'login' && styles.transform}
        size={Spacing.SIZE_16}
        color={Colors.LIGHT_TEXT}
      />
      <Text style={styles.text}>{value}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {renderItem('SimpleLine', 'login', toValue(downloads))}
      {renderItem('SimpleLine', 'heart', toValue(likes))}
      {renderItem('SimpleLine', 'clock', moment(date).format('L'))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: Spacing.SIZE_20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.LIGHT_TEXT,
    marginLeft: Spacing.SIZE_8,
    fontWeight: Typography.FONT_WEIGHT_400,
  },
  transform: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
});
