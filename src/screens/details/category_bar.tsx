import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {} from '../../utils';
import {Spacing, Typography, Colors} from '../../metrics';
import {ScrollView} from 'react-native-gesture-handler';

// Props
interface CategoryProps {
  categories: string[];
}

// Category Component
export default ({categories}: CategoryProps) => {
  return (
    <ScrollView
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {categories.map((category, index) => {
        const color = Colors.CIRCLE_COLORS[index % 3];
        return (
          <View key={index} style={styles.category}>
            <View style={[styles.flex, {backgroundColor: color}]} />
            <Text style={[styles.categoryText, {color}]}>{category}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: Spacing.SIZE_16,
  },
  category: {
    marginRight: Spacing.SIZE_10,
    paddingHorizontal: Spacing.SIZE_6,
    borderRadius: Spacing.SIZE_4,
    paddingVertical: Spacing.SIZE_2,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  flex: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    opacity: 0.2,
    right: 0,
  },

  categoryText: {
    letterSpacing: 1,
    fontSize: Typography.FONT_SIZE_10,
    fontWeight: Typography.FONT_WEIGHT_400,
  },
});
