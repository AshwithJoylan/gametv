/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';

import {Spacing, Colors, Sizes, Typography} from '../../metrics';
import {ScrollView} from 'react-native-gesture-handler';
import {Tap, Icon, SafeAreaView} from '../../utils';
import {Item} from '../home/home_card';
import CategoryBar from './category_bar';
import InfoBar from './info_bar';
// Props
interface DescriptionProps {
  item: Item;
  navigation: NavigationProp<
    Record<string, object | undefined>,
    string,
    NavigationState,
    {},
    {}
  >;
}

// Description Component
export default ({
  item: {
    title,
    rating,
    categories,
    total_downloads: downloads,
    release_date: date,
    likes,
    description,
  },
}: DescriptionProps) => {
  console.log('categories: ', categories);

  return (
    <SafeAreaView forceInset={{bottom: 'always'}} style={styles.container}>
      <ScrollView
        style={styles.bottom}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.titleContainer}>
          <View style={{width: '80%'}}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratings}>{rating}</Text>
            <Icon
              name="ios-star"
              color={Colors.PRIMARY}
              size={Typography.FONT_SIZE_18}
            />
          </View>
        </View>
        <CategoryBar {...{categories}} />
        <InfoBar {...{downloads, likes, date}} />
        <Text style={styles.descriptionTitle}>Introduction</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
      <View style={styles.buttons}>
        <Tap style={styles.downloadButton} onPress={() => {}}>
          <Text>Download</Text>
        </Tap>
        <Tap style={styles.like}>
          <Icon
            type="SimpleLine"
            size={Spacing.SIZE_18}
            color={Colors.BACKGROUND}
            name="heart"
          />
        </Tap>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignSelf: 'stretch',
    right: 0,
    top: Sizes.HEIGHT * 0.55 - Spacing.SIZE_60,
    borderRadius: Spacing.SIZE_40,
    paddingHorizontal: Spacing.SIZE_30,
    paddingTop: Spacing.SIZE_30,
    backgroundColor: Colors.BACKGROUND,
  },
  buttons: {
    alignSelf: 'stretch',
    height: Spacing.SIZE_50,
    flexDirection: 'row',
    marginBottom: Spacing.SIZE_20,
  },
  downloadButton: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacing.SIZE_16,
  },
  like: {
    width: Spacing.SIZE_50,
    backgroundColor: Colors.PRIMARY,
    marginLeft: Spacing.SIZE_20,
    height: '100%',
    borderRadius: Spacing.SIZE_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Typography.FONT_SIZE_24,
    color: Colors.WHITE,
    alignSelf: 'stretch',
    fontWeight: Typography.FONT_WEIGHT_600,
  },
  ratingContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'flex-end',
  },
  ratings: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.PRIMARY,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginRight: Spacing.SIZE_6,
  },
  descriptionTitle: {
    marginTop: Spacing.SIZE_20,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  description: {
    marginTop: Spacing.SIZE_16,
    textAlign: 'justify',
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LIGHT_TEXT,
    fontWeight: Typography.FONT_WEIGHT_500,
  },
  bottom: {
    marginBottom: Spacing.SIZE_16,
  },
});
