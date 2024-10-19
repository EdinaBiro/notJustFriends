import { StyleSheet, Text, View,Image } from 'react-native';
import LikeImage from '../../assets/images/like.png';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";


const FeedPost = ({post}) => {

  return (

      <View style={styles.post}>
        {/*header*/}
        <View style={styles.header}>
          <Image source={ {uri: post.User.image}} style={styles.profileImage} />

          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <MaterialCommunityIcons name="dots-horizontal" size={18} color="gray" style={styles.icon}/>

        </View>
        {/*body*/}
        {post.description && (
          <Text style={styles.description}>{post.description}</Text>
        )}

        {post.image && (   //if conditional in jsx
          <Image source={{uri: post.image}} style={styles.image}/>
         
         )}

        {/*footer*/}
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon}/>
            <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} others</Text>
            <Text style={styles.shares}>{post.numberOfShares} shares</Text>

          </View>

          <View style={styles.buttonsRow}>
            <View style={styles.iconButton}>
              <AntDesign name ='like2' size={18} color="gray"/>
              <Text style={styles.iconButtonText}>Like</Text>
            </View>

            <View style={styles.iconButton}>
              <FontAwesome5 name ='comment-alt' size={18} color="gray"/>
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>


            <View style={styles.iconButton}>
              <MaterialCommunityIcons name ='share-outline' size={18} color="gray"/>
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>

        </View>

      </View>

    
    
  );
}

const styles = StyleSheet.create({
  profileImage:{
    width: 40,
    height:40,
    borderRadius: 25,
    marginRight: 10,
  },
  post:{
    width: "100%",
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  subtitle:{
    color: "gray",
  },
  icon:{
    marginLeft: "auto",
  },
  header:{
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  name:{
    fontWeight: "500",
  },
  image:{
    width: '100%',
    aspectRatio: 4/3,
    marginTop: 10,

  },
  description:{
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,

  },
  footer:{
    paddingHorizontal: 10,
  },
  likeIcon:{
    width: 20,
    height: 20,
    marginRight: 5,
  },
  statsRow:{
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likedBy:{
    color: "gray",
  },
  shares:{
    marginLeft: "auto",
    color: "gray",
  },
  buttonsRow:{
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconButton:{
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText:{
    marginLeft: 5,
    color: "gray",
    fontWeight: "500"
  }
});

export default FeedPost;