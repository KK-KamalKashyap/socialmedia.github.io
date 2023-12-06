import { createContext, useReducer } from "react";

export const PostList =   createContext({
    postList: [],
    addPost : () => {},
    deletePost: () => {},


});
const posttListReducer = (currPostList, action) => {
let newPostList = currPostList;

if(action.type === 'DELETE_POST'){
newPostList = currPostList.filter(post => post.id !== action.payload.postId)
}else if(action.type === 'ADD_POST'){
newPostList = [action.payload, ...currPostList]
}

    return newPostList;
}
const PostListProvider = ({children}) => {

const [postList,dispatchPostList] =   useReducer(posttListReducer, DELETE_POST_LIST);



const addPost = (userId,postTitle,postBody,reactions,tags) => {
dispatchPostList({
    type: 'ADD_POST',
    payload:{
        id : Date.now(),
        title : postTitle,
        body : postBody,
        reactions : reactions,
        userId: userId,
        tags: tags,
        },
})
}

 const   deletePost = (postId) => {
    dispatchPostList({
        type: 'DELETE_POST',
        payload: {
            postId :postId,
        }
    })
}



return <PostList.Provider value={{postList: postList, addPost: addPost, deletePost: deletePost}}>
{children}
</PostList.Provider>

}

const DELETE_POST_LIST = [{
id : '1',
title : ' Go To Goa',
body : 'Hi Friends, I am going to goa for my vaction .hope to well',
reactions : 2,
userId: 'user-9',
tags: ['vaction','goa', 'travel']
},
{
    id : '2',
    title : ' Go To Shimala',
    body : 'Hi Friends, I am goging to shimala for my vaction .hope to well',
    reactions : 2,
    userId: 'user-12',
    tags: ['vaction','shimala', 'travel']
    },

    


];


export default PostListProvider;
