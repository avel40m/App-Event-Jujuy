import { Text, View, Pressable, Modal, TouchableOpacity } from 'react-native'
import { styles } from './FilterBar.styles'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { COLORS, FONT_SIZE } from '../../util/Theme'

export const FilterBar = ({ handleSort, handlePrevious, handleUpcoming, resetFilters, eventList }) => {
  const [show, setShow] = useState(false)

  const handleShowModal = () => setShow(!show)

  return (
    <View style={styles.container}>
      <Text style={styles.flexItem}>{eventList.length} resultados</Text>
      <Pressable onPress={handleShowModal}>
        <AntDesign name='filter' size={FONT_SIZE.lg} color={COLORS.text} />
      </Pressable>
      <Modal
        visible={show}
        animationType='fade'
        transparent
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                handleShowModal()
                handleSort()
              }}
              style={styles.modalOption}
            >
              <Text>Odernar por fecha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleShowModal()
                handleUpcoming()
              }}
              style={styles.modalOption}
            >
              <Text>Eventos próximos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleShowModal()
                handlePrevious()
              }}
              style={styles.modalOption}
            >
              <Text>Eventos pasados</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleShowModal()
                resetFilters()
              }}
              style={styles.modalOption}
            >
              <Text style={styles.textOption}>Eliminar filtros</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
