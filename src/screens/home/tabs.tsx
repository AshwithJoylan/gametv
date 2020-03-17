import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Component from './tab';
import {Colors, Spacing, Typography} from '../../metrics';
import {Highlight} from '../../utils';
import Animated from 'react-native-reanimated';

const {Navigator, Screen} = createMaterialTopTabNavigator();
// Props
interface TabsProps {
  data?: string[];
}

type TabBar = (props: MaterialTopTabBarProps) => React.ReactNode;

const d = ['Popular', 'New In', 'Action', 'Adventure', 'Character'];

// Tabs Component
export default ({data = d}: TabsProps) => {
  const tabBar: TabBar = props => {
    return (
      <View style={styles.tabBarContainer}>
        <Animated.ScrollView
          bounces={props.bounces}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {props.state.routes.map((route, i) => {
            const active = props.state.index === i;
            const color = active ? Colors.PRIMARY : Colors.LIGHT_TEXT;
            return (
              <Highlight
                key={i}
                style={styles.tabItem}
                underlayColor="rgba(0, 0, 0, 0.05)"
                onPress={() => props.jumpTo(route.key)}>
                {active && <View style={styles.activeCircle} />}
                <Animated.Text style={[styles.tabTitle, {color}]}>
                  {route.name}
                </Animated.Text>
              </Highlight>
            );
          })}
        </Animated.ScrollView>
      </View>
    );
  };

  return (
    <Navigator
      sceneContainerStyle={styles.tabBar}
      swipeEnabled={false}
      tabBar={tabBar}
      tabBarOptions={{
        scrollEnabled: true,
        pressOpacity: 0.8,
        inactiveTintColor: Colors.LIGHT_TEXT,
        activeTintColor: Colors.PRIMARY,
        style: styles.tabBar,
        tabStyle: styles.tabBar,
        renderIndicator: () => <View />,
      }}>
      {data.map((name, key) => (
        <Screen {...{name, key}} component={Component} />
      ))}
    </Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: Colors.BACKGROUND,
  },
  tabBarContainer: {
    alignSelf: 'stretch',
    height: Spacing.SIZE_50,
  },
  tabItem: {
    paddingHorizontal: Spacing.SIZE_20,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_WEIGHT_500,
  },
  activeCircle: {
    width: Spacing.SIZE_6,
    marginRight: Spacing.SIZE_10,
    height: Spacing.SIZE_6,
    borderRadius: Spacing.SIZE_6 / 2,
    backgroundColor: Colors.PRIMARY,
  },
});
