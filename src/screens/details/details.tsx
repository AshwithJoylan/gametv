import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Colors} from '../../metrics';
import {SafeAreaView} from '../../utils';
import Top from './top';
import Description from './description';
import {Item} from '../home/home_card';

// Props
interface DetailsProps {}

// Details Component
export default ({}: DetailsProps) => {
  // Getting Navigation && route
  const navigation = useNavigation();
  const {item} = useRoute().params as {item: Item};

  const {image} = item;
  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.container}>
      <Top {...{image, navigation}} />
      <Description {...{item, navigation}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
