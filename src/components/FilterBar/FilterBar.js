import { Text, View } from 'react-native'
import { styles } from './FilterBar.styles'

export const FilterBar = ({ eventList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.flexItem}>{eventList.length} resultados</Text>
    </View>
  )
}
