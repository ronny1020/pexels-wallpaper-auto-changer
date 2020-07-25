import * as React from 'react'
import { StyleSheet } from 'react-native'

import MainContent from '../components/MainContent'
import { Text, View, ScrollView } from '../components/Themed'

export default function TabOneScreen() {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Text style={styles.title}>Main</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <MainContent />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
