import {Text,View,StyleSheet,Image,TextInput,Button,KeyboardAvoidingView} from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from 'react-native';

const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  };



const CreatePostScreen = () => {

    const [description, setDescription] = useState("");

    //const insets = useSafeAreaInsets();

    const onSubmit = () => {
        console.warn("On submit",description);
        setDescription("");
    };


    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, { marginBottom: 10}]}
        contentContainerStyle={{ flex: 1 }}
        //keyboardVerticalOffset={150}
       >
            <View style={styles.header}>
            <Image source={{uri: user.image}} style={styles.image} />
            <Text>{user.name} </Text>
        </View>

            <TextInput 
            value={description} 
            onChangeText={setDescription}
            placeholder='What is on yor mind?' 
            multiline
            />

        <View style={styles.buttonConatiner}>
              <Button title="Post" onPress={onSubmit}/>
        </View>
          
        </KeyboardAvoidingView>

    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        paddingTop: 10,
        marginTop: 30,
        backgroundColor: "#fff",

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,

    },
    image:{
        width:40,
        height:40,
        borderRadius:30,
        marginRight: 10,
  },
    name:{
        fontWeight: "500",
    },
    buttonConatiner:{
        marginTop: "auto",

    }

})

export default CreatePostScreen;