import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';

import {Item} from '../home/home_card';
import {Tap, Icon} from '../../utils';
import {Spacing, Typography, Colors} from '../../metrics';
import {useNavigation} from '@react-navigation/native';

// Props
interface ItemProps {
  item: Item;
}

const toValue = (number: number) => {
  // Nine Zeroes for Billions
  return Math.abs(number) >= 1.0e9
    ? Math.abs(number) / 1.0e9 + 'B'
    : // Six Zeroes for Millions
    Math.abs(number) >= 1.0e6
    ? Math.abs(number) / 1.0e6 + 'M'
    : // Three Zeroes for Thousands
    Math.abs(number) >= 1.0e3
    ? Math.abs(number) / 1.0e3 + 'K'
    : Math.abs(number);
};

// Item Component
export default ({item}: ItemProps) => {
  const {image, title, likes, description} = item;
  const navigation = useNavigation();
  return (
    <Tap
      onPress={() => {
        navigation.navigate('Details', {item});
      }}
      style={styles.container}>
      <Image source={{uri: image}} style={styles.thumb} />
      <View style={styles.infoContainer}>
        <View style={styles.top}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <View style={styles.likes}>
            <Icon
              name="ios-heart"
              size={Spacing.SIZE_16}
              color={Colors.CIRCLE_COLORS[0]}
            />
            <Text style={styles.likesText}>{toValue(likes)}</Text>
          </View>
        </View>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
      </View>
    </Tap>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.SIZE_20,
    height: Spacing.SIZE_120,
  },
  thumb: {
    width: Spacing.SIZE_80,
    height: Spacing.SIZE_80,
    borderRadius: Spacing.SIZE_20,
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    marginLeft: Spacing.SIZE_20,
    justifyContent: 'center',
  },
  top: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_600,
  },
  likes: {
    flexDirection: 'row',
  },
  likesText: {
    marginLeft: Spacing.SIZE_6,
    fontSize: Spacing.SIZE_12,
    color: Colors.CIRCLE_COLORS[0],
    fontWeight: Typography.FONT_WEIGHT_500,
  },
  description: {
    marginTop: Spacing.SIZE_6,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.LIGHT_TEXT,
    fontWeight: Typography.FONT_WEIGHT_400,
  },
});
