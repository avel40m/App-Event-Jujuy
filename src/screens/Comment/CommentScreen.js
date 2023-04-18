import { Text, View, StatusBar, TextInput, FlatList, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { recoverComment, savedComment } from '../../api/comment'
import { Feather } from '@expo/vector-icons'
import { styles } from './commentscreen.style'

export const CommentScreen = () => {
  const route = useRoute()
  const [comment, setComment] = useState('')
  const { currentUser } = useContext(UserContext)
  const inputRef = useRef()
  const [commentsList, setCommentsList] = useState([])

  useEffect(() => {
    async function getData () {
      const response = await recoverComment()
      setCommentsList(response.filter(comment => comment.title === route.params.name))
    }
    getData()
  }, [])

  const postComment = () => {
    const name = route.params.name
    const user = currentUser.username
    const commentar = {
      title: name,
      user,
      comentario: comment
    }
    setCommentsList([...commentsList, commentar])
    savedComment(user, name, comment)
    inputRef.current.clear()
  }
  return (
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <Text style={styles.title}>Comentarios: {route.params.name}</Text>
      </View>
      <FlatList
        data={commentsList}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={styles.cards}>
              <View style={styles.cardsContainer}>
                <Image source={require('../../../assets/image/user.jpg')} style={styles.carsImage} />
                <Text>{item.user}</Text>
              </View>
              <View>
                <Text>{item.comentario}</Text>
              </View>

            </View>
          )
        }}
      />
      <View style={styles.inputs}>
        <TextInput
          ref={inputRef}
          value={comment}
          onChangeText={txt => setComment(txt)}
          placeholder='Escriba su mensaje'
          style={styles.textInputs}
        />
        <Text
          style={styles.buttons}
          onPress={() => postComment()}
        >
          <Feather name='send' size={24} color='blue' />
        </Text>
      </View>
    </View>
  )
}
