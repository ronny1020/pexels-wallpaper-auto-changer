import * as WebBrowser from 'expo-web-browser'
import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { PexelsPhotosObject } from '../types'
import { Text, View, ScrollView } from './Themed'
import { createClient } from 'pexels'
import PhotoCard from './PhotoCard'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

export default function MainContent() {
  const [PexelsPhotos, setPexelsPhotos] = useState<
    PexelsPhotosObject | undefined
  >(undefined)

  const [keyword, setKeyword] = useState<string>('nature')

  const SearchPexels = async (query: string) => {
    const client = createClient(
      '563492ad6f9170000100000192566700df22457981e0b9c246048847'
    )
    const photos: any = await client.photos.search({
      query,
      per_page: 10,
    })
    setPexelsPhotos(photos)
  }

  const updateSearch = (keyword: string) => {
    setKeyword(keyword)
  }

  useEffect(() => {
    SearchPexels(keyword)
  }, [keyword])

  return (
    <View style={styles.Container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={keyword}
      />
      <ScrollView>
        <FlatList
          data={PexelsPhotos ? PexelsPhotos.photos : []}
          renderItem={({ item }) => (
            <PhotoCard
              key={item.id.toString()}
              src={item.src.large}
              photographer={item.photographer}
            />
          )}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
})
