import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



const mapStateToProps = (appState) => {
   return {
      posts: appState.profilePage.posts,
      newPostText: appState.profilePage.newPostText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let action = updateNewPostTextActionCreator (text);
         dispatch (action);
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);



export default MyPostsContainer;