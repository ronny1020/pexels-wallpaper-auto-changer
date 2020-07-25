import * as WebBrowser from 'expo-web-browser'
import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { PexelsPhotosObject } from '../types'
// import Colors from '../constants/Colors'
// import { MonoText } from './StyledText'
import { Text, View } from './Themed'
import { createClient } from 'pexels'

export default function EditScreenInfo() {
  const [PexelsPhotos, setPexelsPhotos] = useState<
    PexelsPhotosObject | undefined
  >(undefined)

  const SearchPexels = async () => {
    const client = createClient(
      '563492ad6f9170000100000192566700df22457981e0b9c246048847'
    )
    const query: string = 'Nature'
    const photos: any = await client.photos.search({
      query,
      per_page: 10,
    })
    setPexelsPhotos(photos)
  }

  useEffect(() => {
    SearchPexels()
  }, [])

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          {JSON.stringify(PexelsPhotos)}
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
