import React from 'react';
import {View, StatusBar, ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Colors} from '../../metrics';
import {SafeAreaView} from '../../utils';
import styles from '../../styles/filter';
import Header from './header';
import ListItem from './list_item';
import {Item} from '../home/home_card';
// Props
interface FilterProps {}

const showsVerticalScrollIndicator = false;
const keyExtractor: (item: any, index: number) => string = (_, i) =>
  i.toString();

const ItemSeparatorComponent = () => <View style={styles.separator} />;

// Filter Component
export default ({}: FilterProps) => {
  const renderItem: ListRenderItem<Item> = ({item}) => <ListItem {...{item}} />;
  return (
    <SafeAreaView
      forceInset={{top: 'always', bottom: 'always'}}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BACKGROUND} />
      <Header />
      <FlatList
        {...{
          data,
          showsVerticalScrollIndicator,
          renderItem,
          keyExtractor,
          ItemSeparatorComponent,
        }}
      />
    </SafeAreaView>
  );
};

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
    total_downloads: 6300000,
    likes: 430000,
    release_date: '2017-11-12',
    description:
      'Real Racing 3 is the award-winning franchise that sets a new standard for mobile racing games. This app offers in-app purchases. You may disable in-app purchasing using your device settings. This app may contain content provided by third parties. Electronic Arts is not responsible for such content. \n\n Real Racing 3 is the award-winning franchise that sets a new standard for mobile racing games. This app offers in-app purchases. You may disable in-app purchasing using your device settings. This app may contain content provided by third parties. Electronic Arts is not responsible for such content',
    status: 1,
    rating: 9.9,
    categories: ['Racing', 'Driving', 'Multiplayer', 'Online', 'FPS'],
  },
  {
    image:
      'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pub_660x450_010219045955.jpg',
    title: 'PUBG',
    total_downloads: 12000000,
    likes: 4200000,
    release_date: '2018-02-15',
    description:
      "PlayerUnknowns Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. \n\n PlayerUnknown's Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.",
    status: 0,
    rating: 9.4,
    categories: ['Action', 'FPS'],
  },
  {
    image:
      'https://cdn.mos.cms.futurecdn.net/ycuWtgZ9xLDcCsNk3q6J2c-1024-80.jpg',
    title: 'Call Of Duty',
    total_downloads: 10002000,
    likes: 320000,
    release_date: '2017-11-12',
    description:
      'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. \n\n Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space',
    status: 1,
    rating: 9.3,
    categories: ['Racing', 'Driving', 'Multiplayer'],
  },
  {
    image:
      'https://cdn.motor1.com/images/mgl/PrZXK/s1/real-racing-3-evolution-of-jaguar.jpg',
    title: 'Real Racing 3',
    total_downloads: 6304300,
    likes: 430000,
    release_date: '2017-11-12',
    description:
      'Real Racing 3 is the award-winning franchise that sets a new standard for mobile racing games. This app offers in-app purchases. You may disable in-app purchasing using your device settings. This app may contain content provided by third parties. Electronic Arts is not responsible for such content. \n\n Real Racing 3 is the award-winning franchise that sets a new standard for mobile racing games. This app offers in-app purchases. You may disable in-app purchasing using your device settings. This app may contain content provided by third parties. Electronic Arts is not responsible for such content',
    status: 1,
    rating: 9.9,
    categories: ['Racing', 'Driving', 'Multiplayer', 'Online', 'FPS'],
  },
];
