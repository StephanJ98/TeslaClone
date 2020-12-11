import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/Caritem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model S'}
        tagline={'Starting at $99,500'}
        taglineCTA={'Touchless Delivery'}
        image={require('./assets/images/ModelS.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
