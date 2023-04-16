import React from 'react'
import { TextInput, View, Pressable } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { styles } from './SearchBar.styles'
import { COLORS, FONT_SIZE } from '../../util/Theme'

export const SearchBar = ({ handleSearch, searchQuery, resetSearchQuery }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AntDesign name='search1' size={18} color={COLORS.primary} />
        <TextInput
          placeholder='Buscar'
          onChangeText={handleSearch}
          value={searchQuery}
          style={styles.inputText}
          autoCapitalize='none'
        />
        {searchQuery &&
          <Pressable onPress={resetSearchQuery}>
            <Feather name='x' size={FONT_SIZE.lg} color={COLORS.text} />
          </Pressable>}
      </View>
    </View>
  )
}
