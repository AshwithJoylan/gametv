import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';
import {BlurView} from '@react-native-community/blur';

import {Spacing, Typography, Colors} from '../../metrics';
import {Tap} from '../../utils';
import {useNavigation} from '@react-navigation/native';

export interface Item {
  image: string;
  title: string;
  rating: number;
  total_downloads: number;
  likes: number;
  release_date: number | string;
  categories: string[];
  description: string;
  status: 0 | 1 | 2;
}
// Props
interface HomeCardProps {
  item: Item;
}

// HomeCard Component
export default ({item}: HomeCardProps) => {
  const navigation = useNavigation();
  const {image, categories, status, title} = item;
  return (
    <Tap
      onPress={() => {
        navigation.navigate('Details', {item});
      }}
      style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <BlurView blurType="dark" blurAmount={10} style={styles.titleContainer}>
        <View
          style={[
            styles.circle,
            {backgroundColor: Colors.CIRCLE_COLORS[status]},
          ]}
        />
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <View style={styles.categories}>
            {categories.slice(0, 2).map(category => (
              <Text key={category} style={styles.categoryText}>
                {category}
              </Text>
            ))}
          </View>
        </View>
      </BlurView>
    </Tap>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Spacing.SIZE_220,
    height: Spacing.SIZE_320,
    borderRadius: Spacing.SIZE_40,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  subContainer: {
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    paddingHorizontal: Spacing.SIZE_20,
    alignItems: 'center',
    right: 0,
    borderRadius: Spacing.SIZE_40,
    height: Spacing.SIZE_80,
  },
  title: {
    alignSelf: 'stretch',
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_400,
    color: Colors.WHITE,
  },
  categories: {
    alignSelf: 'stretch',
    marginTop: Spacing.SIZE_4,
    flexDirection: 'row',
  },
  categoryText: {
    fontSize: Typography.FONT_SIZE_10,
    color: '#8193A5',
    marginRight: Spacing.SIZE_10,
  },
  circle: {
    width: Spacing.SIZE_10,
    height: Spacing.SIZE_10,
    marginRight: Spacing.SIZE_10,
    borderRadius: Spacing.SIZE_5,
  },
});
