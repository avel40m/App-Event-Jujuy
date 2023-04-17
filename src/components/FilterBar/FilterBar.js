import { useState } from 'react'
import { Text, View, Pressable, Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './FilterBar.styles'
import { COLORS, FONT_SIZE } from '../../util/Theme'
import { ModalOption } from '../ModalOption/ModalOption'

export const FilterBar = ({ handleSort, handlePrevious, handleUpcoming, resetFilters, filters, eventList }) => {
  const [show, setShow] = useState(false)

  const handleShowModal = () => setShow(prev => !prev)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{eventList.length} resultados</Text>
      <Pressable onPress={handleShowModal}>
        <AntDesign name='filter' size={FONT_SIZE.lg} color={COLORS.text} />
      </Pressable>
      <Modal
        visible={show}
        animationType='fade'
        transparent
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalBackground}
          onPress={handleShowModal}
        >
          <View style={styles.modalContainer}>
            <ModalOption
              onPress={handleSort}
              filter={filters.sort}
              text='Ordenar por fecha'
            />

            <ModalOption
              onPress={handleUpcoming}
              filter={filters.upcoming}
              text='Eventos próximos'
            />

            <ModalOption
              onPress={handlePrevious}
              filter={filters.previous}
              text='Eventos pasados'
            />

            <TouchableOpacity
              onPress={resetFilters}
              style={styles.modalOptionDelete}
            >
              <Text style={styles.textOption}>Eliminar filtros</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}
