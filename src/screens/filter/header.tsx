import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Tap, Icon} from '../../utils';
import {Spacing, Typography, Colors} from '../../metrics';
// Props
interface HeaderProps {}

// Header Component
export default ({}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
      <Tap style={styles.searchButton}>
        <Icon
          type="FontAwesome5"
          name="sliders-h"
          color={Colors.WHITE}
          size={Spacing.SIZE_20}
        />
      </Tap>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: Spacing.SIZE_10,
    paddingHorizontal: Spacing.SIZE_20,
    height: Spacing.SIZE_40,
    marginBottom: Spacing.SIZE_10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.WHITE,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  searchButton: {
    height: '100%',
    width: Spacing.SIZE_40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
