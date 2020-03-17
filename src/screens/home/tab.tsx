import React from 'react';
import {View, StyleSheet, ListRenderItem} from 'react-native';

import {Colors, Spacing} from '../../metrics';
import HomeCard, {Item} from './home_card';
import {FlatList} from 'react-native-gesture-handler';

// Props
interface TabProps {}

const showsHorizontalScrollIndicator = false;

// Tab Component
export default ({}: TabProps) => {
  const renderItem: ListRenderItem<Item> = ({item}) => <HomeCard {...{item}} />;
  const keyExtractor: (item: Item, index: number) => string = (_, i) =>
    i.toString();
  const contentContainerStyle = styles.content;
  const ItemSeparatorComponent = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        {...{
          data,
          renderItem,
          keyExtractor,
          showsHorizontalScrollIndicator,
          contentContainerStyle,
          ItemSeparatorComponent,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Spacing.SIZE_20,
    backgroundColor: Colors.BACKGROUND,
  },
  content: {
    paddingHorizontal: Spacing.SIZE_20,
  },
  separator: {
    width: Spacing.SIZE_20,
  },
});

const data: Item[] = [
  {
    image:
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Gunfire Ranger',
    total_downloads: 19000,
    likes: 2300,
    release_date: '2018-02-15',
    description:
      'A game is a structured form of play, usually undertaken for enjoyment and sometimes used as an educational tool. Games are distinct from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements. \n\n A game is a structured form of play, usually undertaken for enjoyment and sometimes used as an educational tool. Games are distinct from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements.',
    status: 0,
    rating: 9.4,
    categories: ['Action', 'FPS'],
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Need_for_Speed_Heat_Car_%2848605687961%29.jpg/800px-Need_for_Speed_Heat_Car_%2848605687961%29.jpg',
    title: 'Need For Speed: The run',
    total_downloads: 2302000,
    likes: 32000,
    release_date: '2017-11-12',
    description:
      'Hit the gas and tear up the streets in this legendary action-driving series. Customize your super car to leave the competition in your rear view or shake off a full-scale police pursuit – it’s all just a key-turn away. Hustle by day and risk it all by night in Need for Speed Heat, get revenge on a notorious racing cartel in Need for Speed Payback, or put the pedal down on another Need for Speed game. \n\n Hit the gas and tear up the streets in this legendary action-driving series. Customize your super car to leave the competition in your rear view or shake off a full-scale police pursuit – it’s all just a key-turn away. Hustle by day and risk it all by night in Need for Speed Heat, get revenge on a notorious racing cartel in Need for Speed Payback, or put the pedal down on another Need for Speed game.',
    status: 1,
    rating: 9.8,
    categories: ['Racing', 'Driving', 'Multiplayer'],
  },
  {
    image:
      'https://cdn.motor1.com/images/mgl/PrZXK/s1/real-racing-3-evolution-of-jaguar.jpg',
    title: 'Real Racing 3',
    total_downloads: 6304300,
    likes: 430290,
    release_date: '2017-11-12',
    description:
      'Real Racing 3 is the award-winning franchise that sets a new standard for mobile racing games. This app offers in-app purchases. You may disable in-app purchasing using your device settings. This app may contain content provided by third parties. Electronic Arts is not responsible for such content. \n\n Real Racing 3 is the award-winning franchise that sets a new standard for mobile racing games. This app offers in-app purchases. You may disable in-app purchasing using your device settings. This app may contain content provided by third parties. Electronic Arts is not responsible for such content',
    status: 1,
    rating: 9.9,
    categories: ['Racing', 'Driving', 'Multiplayer', 'Online', 'FPS'],
  },
];
