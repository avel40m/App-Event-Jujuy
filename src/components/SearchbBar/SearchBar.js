import React from 'react'
import { TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './SearchBar.styles'
import { COLORS } from '../../util/Theme'

export const SearchBar = ({ handleSearch, searchQuery }) => {
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
      </View>
    </View>
  )
}
