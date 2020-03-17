import React from 'react';
import {StyleSheet} from 'react-native';
import Image from 'react-native-fast-image';

import {Tap} from '../../utils';
import {Spacing} from '../../metrics';
import {Item} from './home_card';

// Props
interface RecommendedCardProps {
  item: Item;
}

// RecommendedCard Component
export default ({item: {image}}: RecommendedCardProps) => {
  return (
    <Tap style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
    </Tap>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Spacing.SIZE_120,
    height: Spacing.SIZE_120,
    overflow: 'hidden',
    borderRadius: Spacing.SIZE_40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
