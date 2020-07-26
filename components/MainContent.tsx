import * as WebBrowser from 'expo-web-browser'
import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { PexelsPhotosObject, PexelsPhotoDetail } from '../types'
import { View, Text } from './Themed'

const createClient = require('pexels')

import PhotoCard from './PhotoCard'

export default function MainContent() {
  const [PexelsPhotos, setPexelsPhotos] = useState<PexelsPhotoDetail[]>([])
  const [keyword, setKeyword] = useState<string>('nature')
  const [showedItemsNum, setShowedItemsNum] = useState<number>(5)

  const per_page: number = 80

  const SearchPexels = async (
    query: string,
    page: number
  ): Promise<PexelsPhotosObject> => {
    const client = createClient(
      '563492ad6f9170000100000192566700df22457981e0b9c246048847'
    )
    const photos: PexelsPhotosObject = await client.photos.search({
      query,
      page,
      per_page,
    })
    return photos
  }

  const getPhotos = async (query: string) => {
    let photosList: PexelsPhotoDetail[] = []
    for (let i = 1; i < Math.ceil(showedItemsNum / per_page); i++) {
      const newPhotos: PexelsPhotosObject = await SearchPexels(query, i)
      photosList = [...photosList, ...newPhotos.photos]
    }
    setPexelsPhotos(photosList)
  }

  const updateSearch = (keyword: string) => {
    setKeyword(keyword)
    setShowedItemsNum(5)
  }

  const endReached = () => {
    setShowedItemsNum(showedItemsNum + 3)
  }

  useEffect(() => {
    getPhotos(keyword)
  }, [keyword])

  return (
    <View style={styles.Container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={keyword}
      />
      {PexelsPhotos.length ? (
        <FlatList
          data={PexelsPhotos}
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
