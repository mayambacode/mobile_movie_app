import { View, Text } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { Image } from 'expo-image'

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" contentFit='contain' tintColor="ab8bff"/>
    </View>
  )
}

export default SearchBar