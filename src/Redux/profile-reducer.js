const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
   posts: [
      { id: 1, post: "Hi, how are you?", likesCount: 12 },
      { id: 2, post: "It's my first post", likesCount: 23 },
      { id: 3, post: "Yooooo, Bro!", likesCount: 83 },
   ],
   newPostText: "Add Post",
   profile: null,
};

const profileReducer = (appState = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: appState.newPostText,
            likesCount: 0,
         };
         return {
            ...appState,
            posts: [...appState.posts, newPost],
            newPostText: "",
         };
      }


      case UPDATE_NEW_POST_TEXT: {
         return {
            ...appState,
            newPostText: action.newText,
         };
      }
      case SET_USER_PROFILE: {
         return {...appState, profile: action.profile}
      }
      default:
         return appState;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
});

export default profileReducer;
