import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from '../../styles/home';
import {Colors} from '../../metrics';
import {SafeAreaView} from '../../utils';
import Header from './header';
import Tabs from './tabs';
import RecommendedList from './recommended_list';
// Props
interface HomeProps {}

// Home Component
export default ({}: HomeProps) => {
  return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={Colors.LIGHT_BLACK}
        barStyle="light-content"
      />
      <Header />
      <ScrollView bounces={false}>
        <View style={styles.top}>
          <Tabs />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>Recommended to you</Text>
          <RecommendedList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
