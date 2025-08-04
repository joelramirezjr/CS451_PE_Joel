import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SubmitButton = ({ title, onPress }) => (
  <View style={styles.buttonWrapper}>
    <Button
      title={title}
      onPress={onPress}
      color="lightgrey"
      textColor="black"
    />
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 140,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
});

export default SubmitButton;