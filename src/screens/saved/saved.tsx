import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
interface SavedProps {}

// Saved Component
export default ({}: SavedProps) => {
  return (
    <View style={styles.container}>
      <Text>Saved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
