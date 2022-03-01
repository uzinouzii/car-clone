import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import  {Divider}  from 'react-native-elements'

const PostFooterIcons = [
  {
    name : 'Like',
    imageUrl: 'https://img.icons8.com/color/344/like--v3.png',
    likedImageUrl: 'https://img.icons8.com/office/344/fire-heart.png',
  },

  {
    name: 'Comment',
    imageUrl:'https://cdn-icons-png.flaticon.com/512/4081/4081342.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://cdn-icons.flaticon.com/png/512/3417/premium/3417100.png?token=exp=1644074123~hmac=f1c39a991f3fd981b11fa64e43c8a8e6',
  },

]

const Post = ({post}) => {
  return (
    <View style = {{ marginBottom: 30 }}>
      <Divider width ={1} orientation = 'vertical'/>
      <PostHeader post={post}/>
      <PostImage post ={post}/>
      <View style = {{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter />
        <Likes post ={post}/>
        <Caption post ={post}/>
        <CommentSection post ={post}/>
        <Comments post ={post}/>
      </View>
    </View>
  );
}
const PostHeader = ({post}) => (
  <View style ={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin:5, 
      alignItems: 'centre'
    }}>
    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.story}/>
        <Text style = {{color: 'white', marginLeft: 5, fontWeight: '700'}}>
          {post.user}
        </Text>
        <Text style = {{color:'green', marginLeft: 8}}>
          Follow
        </Text>
    </View>
    <Text style ={{color: 'white', fontWeight: '900'}}> ... </Text>
  </View>
)


const PostImage = ({post}) => (
  <View 
    style = {{
      width: '100%',
      height: 450,
  }}> 
    <Image 
        source = {{uri: post.imageUrl}}
        style = {{height: '100%', resizeMode: 'cover'}}
    />
  </View>
)

const PostFooter = () => (
  <View style ={{flexDirection : 'row'}}>
    <View style ={styles.leftfootericonContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageUrl} />
    </View>
  </View>
)

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style ={imgStyle} source = {{ uri: imgUrl}} />
  </TouchableOpacity>
)

const Likes = ({ post }) => (
<View style ={{flexDirection: 'row', marginTop: 4}}>
  <Text 
    style = {{color:'white', fontWeight:'600'}}>
    {post.likes.toLocaleString('en')} Likes
  </Text>
</View>
)

const Caption = ({post}) => (
<View style ={{marginTop: 5}}>
  <Text style ={{color: 'white'}}>
    <Text style ={{fontWeight: '600'}}>{post.user}</Text>
    <Text> {post.caption}</Text>
  </Text>
</View>
)

const CommentSection =({post}) => (
  <View style ={{ marginTop: 5 }}>
    {!!post.Comments.length && ( 
      <Text style={{color: 'gray'}}> 
        View {post.Comments.length > 1 ? ' all' : ''} {post.Comments.length}{' '}
        {post.Comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
)

const Comments =({post}) => (
  <>
    {post.Comments.map((comment, index) => (
      <View key = {index} style ={{ flexDirection: 'row', marginTop: 5}}>
        <Text style = {{color: 'white'}}>
          <Text style ={{fontWeight: '600', color: 'white'}}>{comment.user}</Text>{' '}
            {comment.comment}
        </Text>
      </View> 
    ))}
  </>
)

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft:6,
    borderWidth: 1.6,
    borderColor: '#ff9501',
  },
  footerIcon: {
    width: 27,
    height: 28,
  },

  leftfootericonContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  }
})

export default Post

