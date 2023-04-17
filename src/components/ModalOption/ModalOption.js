import { Switch, Text, View, TouchableWithoutFeedback } from 'react-native'
import { styles } from './ModalOption.styles'
import { COLORS } from '../../util/Theme'

export const ModalOption = ({ onPress, filter, text }) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles.modalOption}>
        <Text>{text}</Text>
        <Switch
          trackColor={{ false: COLORS.inactive, true: COLORS.primary }}
          thumbColor={COLORS.grey}
          onValueChange={onPress}
          value={filter}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
