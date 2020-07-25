import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'

import { View } from './Themed'
const win = Dimensions.get('window')

type CardProps = { src: string }

export default function PhotoCard(props: CardProps) {
  return (
    <View style={styles.PhotoCard}>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Image
          style={styles.Image}
          source={{
            uri: props.src,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  PhotoCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    flex: 1,
    elevation: 4,
    borderRadius: 3,
    margin: 10,
    padding: 10,
  },
  TouchableOpacity: {
    flex: 1,
  },
  Image: {
    flex: 1,
    width: win.width * 0.9,
    height: (win.width * 0.9 * 4) / 3,
  },
})
