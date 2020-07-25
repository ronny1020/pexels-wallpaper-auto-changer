import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'

export default function EditScreenInfo() {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
})
