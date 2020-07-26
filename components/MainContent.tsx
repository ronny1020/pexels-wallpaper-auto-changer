import * as WebBrowser from 'expo-web-browser'
import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { PexelsPhotosObject, PexelsPhotoDetail } from '../types'
import { View } from './Themed'
import { createClient } from 'pexels'
import PhotoCard from './PhotoCard'

export default function MainContent() {
  const [PexelsPhotos, setPexelsPhotos] = useState<
    PexelsPhotosObject | undefined
  >(undefined)

  const [keyword, setKeyword] = useState<string>('nature')
  const [showedItemsNum, setShowedItemsNum] = useState<number>(5)

  const SearchPexels = async (query: string) => {
    const client = createClient(
      '563492ad6f9170000100000192566700df22457981e0b9c246048847'
    )
    const photos: any = await client.photos.search({
      query,
      per_page: 80,
    })
    setPexelsPhotos(photos)
  }

  const updateSearch = (keyword: string) => {
    setKeyword(keyword)
    setShowedItemsNum(5)
  }

  const endReached = () => {
    setShowedItemsNum(showedItemsNum + 3)
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
      {PexelsPhotos ? (
        <FlatList
          data={PexelsPhotos.photos}
          keyExtractor={(item: PexelsPhotoDetail) => item.id.toString()}
          renderItem={({ item, index }) =>
            index <= showedItemsNum ? (
              <PhotoCard
                src={item.src.large}
                photographer={item.photographer}
              />
            ) : null
          }
          onEndReached={endReached}
          onEndReachedThreshold={0.3}
        />
      ) : null}
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
