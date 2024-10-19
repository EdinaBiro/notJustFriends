import {Text,View,StyleSheet,Image,TextInput,Button,KeyboardAvoidingView} from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';


const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  };



const CreatePostScreen = () => {

    const [description, setDescription] = useState("");
    const [image,setImage] = useState(null);

    const navigate = useNavigation();

    //const insets = useSafeAreaInsets();

    const onSubmit = () => {
        console.warn("On submit",description);
        setDescription("");

        navigate.goBack();
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
      };

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, { marginBottom: 10}]}
        contentContainerStyle={{ flex: 1 }}
        //keyboardVerticalOffset={150}
       >
            <View style={styles.header}>
            <Image source={{uri: user.image}} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <Entypo
                onPress={pickImage}
                name="images"
                size={24}
                color="limegreen"
                style={styles.icon}
            />
            </View>

            <TextInput 
            value={description} 
            onChangeText={setDescription}
            placeholder='What is on yor mind?' 
            multiline
            />

        <Image source={{ uri: image}} style={styles.image} />

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
    profileImage:{
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

    },
    icon:{
        marginLeft: "auto",
    },
    image:{
        width: "100%",
        aspectRatio: 4/3,
        alignSelf: "center",

    }

})

export default CreatePostScreen;