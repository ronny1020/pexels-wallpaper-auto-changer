import * as WebBrowser from 'expo-web-browser'
import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import { PexelsPhotosObject } from '../types'
import { Text, View } from './Themed'
import { createClient } from 'pexels'
import PhotoCard from './PhotoCard'

export default function MainContent() {
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
      per_page: 3,
    })
    setPexelsPhotos(photos)
  }

  useEffect(() => {
    SearchPexels()
  }, [])

  return (
    <View style={styles.Container}>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        ></Text>

        <FlatList
          data={PexelsPhotos ? PexelsPhotos.photos : []}
          renderItem={({ item }) => (
            <PhotoCard key={item.id.toString()} src={item.src.large} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'red',
  },
  getStartedContainer: {
    flex: 1,
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
})
