import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView, Highlight} from '../utils';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';

import {Sizes, Colors, Spacing} from '../metrics';
import {Home, Filter, Profile, Saved} from '../screens';
import {Icon} from '../utils';

const routes = [
  {key: 'Home', title: 'Home', name: 'ios-home'},
  {key: 'Filter', title: 'Filter', name: 'ios-planet'},
  {key: 'Saved', title: 'Saved', name: 'ios-person'},

  {key: 'Profile', title: 'Profile', name: 'ios-albums'},
];

const initialLayout = {width: Sizes.WIDTH};

// Main Component
export default () => {
  const [index, onIndexChange] = useState(0);

  const renderScene = SceneMap({
    Home,
    Filter,
    Saved,
    Profile,
  });

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: NavigationState<any>},
  ) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? Colors.PRIMARY : '#777';
          const active = index === i;
          return (
            <Highlight
              key={i.toString()}
              style={styles.tabItem}
              underlayColor="rgba(0,0,0,0.05)"
              onPress={() => onIndexChange(i)}>
              <View
                shouldRasterizeIOS
                renderToHardwareTextureAndroid
                style={active ? styles.active : styles.subItem}>
                <Icon
                  type={route.type}
                  color={color}
                  size={Spacing.SIZE_20}
                  name={route.name}
                />
                {active && <Text style={styles.text}>{route.title}</Text>}
              </View>
            </Highlight>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        style={styles.content}
        lazy
        removeClippedSubviews
        tabBarPosition="bottom"
        navigationState={{index, routes}}
        {...{renderScene, onIndexChange, initialLayout, renderTabBar}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.BACKGROUND},
  content: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  tabBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: Spacing.SIZE_80,
    borderTopColor: Colors.LIGHT_TEXT,
    borderTopWidth: Sizes.BORDER_WIDTH,
    backgroundColor: Colors.BACKGROUND,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    padding: Spacing.SIZE_12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Spacing.SIZE_24,
    backgroundColor: Colors.BLACK,
  },
  text: {
    marginLeft: Spacing.SIZE_10,
    fontSize: Spacing.SIZE_12,
    color: Colors.PRIMARY,
  },
});
