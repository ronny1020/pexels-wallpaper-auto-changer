export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Main: undefined
  Setting: undefined
}

export type MainParamList = {
  MainScreen: undefined
}

export type SettingParamList = {
  SettingScreen: undefined
}

export type PexelsPhotoSrc = {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}

export type PexelsPhotoDetail = {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  src: PexelsPhotoSrc
  liked: false
}

export type PexelsPhotosObject = {
  total_results: number
  page: number
  per_page: number
  photos: PexelsPhotoDetail[]
  next_page: string
}
