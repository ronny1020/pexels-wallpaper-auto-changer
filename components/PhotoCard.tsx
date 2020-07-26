import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { Image, Card, Text } from 'react-native-elements'

const win = Dimensions.get('window')

type CardProps = { src: string; photographer: string }

export default function PhotoCard(props: CardProps) {
  return (
    <TouchableOpacity style={styles.Card}>
      <Card>
        <Image
          style={styles.Image}
          source={{
            uri: props.src,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text h4 h4Style={styles.h4}>
          by {props.photographer}
        </Text>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  h4: {
    fontSize: 16,
    padding: 0,
  },
  Card: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    padding: 0,
  },
  Image: {
    flex: 1,
    width: win.width * 0.8,
    height: (win.width * 0.8 * 4) / 3,
  },
})
