import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import MainContent from '../components/MainContent'
import { Text, View } from '../components/Themed'

export default function TabOneScreen() {
  return (
    <ScrollView>
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
