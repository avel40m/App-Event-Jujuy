import AsyncStorage from "@react-native-async-storage/async-storage"

export async function savedComment(user, title, comentario) {
    try {
        const comment = { user, title, comentario }
        const comments = await AsyncStorage.getItem('comment')
        console.log(comments);
        
        if(comments !== null) {
            const commentArray = JSON.parse(comments);
            commentArray.push(comment);
            await AsyncStorage.setItem('comment',JSON.stringify(commentArray))
        } else {
            await AsyncStorage.setItem('comment',JSON.stringify([comment]))
        }
    } catch (error) {
        console.log(error);
    }
}

export async function recoverComment(){
    try {
        const comment = await AsyncStorage.getItem('comment');
        if(comment !== null){
            return JSON.parse(comment)
        }
    } catch (error) {
        console.log(error);
    }
} 