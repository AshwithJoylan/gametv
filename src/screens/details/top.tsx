import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp, NavigationState} from '@react-navigation/native';
import Image from 'react-native-fast-image';

import {Spacing, Colors, Sizes} from '../../metrics';
import {Tap, Icon} from '../../utils';

// Props
interface TopProps {
  image: string;
  navigation: NavigationProp<
    Record<string, object | undefined>,
    string,
    NavigationState,
    {},
    {}
  >;
}

// Top Component
export default ({image, navigation}: TopProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Tap
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
        style={styles.back}>
        <Icon
          size={Spacing.SIZE_16}
          color={Colors.WHITE}
          name="ios-arrow-back"
        />
      </Tap>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: Sizes.HEIGHT * 0.55,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    top: Spacing.SIZE_50,
    left: Spacing.SIZE_10,
    justifyContent: 'center',
    alignItems: 'center',
    width: Spacing.SIZE_40,
    height: Spacing.SIZE_40,
    borderRadius: Spacing.SIZE_20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
