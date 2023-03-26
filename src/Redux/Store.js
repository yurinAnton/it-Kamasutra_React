import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
   _appState: {
      profilePage: {
         posts: [
            { id: 1, post: "Hi, how are you?", likesCount: 12 },
            { id: 2, post: "It's my first post", likesCount: 23 },
            { id: 3, post: "Yooooo, Bro!", likesCount: 83 },
         ],
         newPostText: "Add Post",
      },

      dialogsPage: {
         dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Aleksandra" },
            { id: 5, name: "Victor" },
            { id: 6, name: "Valeriy" },
         ],
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hello!" },
            { id: 3, message: "How is your JS project?" },
            { id: 4, message: "It's the gratest project." },
            { id: 5, message: "Yooooo!" },
         ],

         newMessageBody: "",
      },
      sidebar: {},
   },

   _callSubscriber() {
      console.log("State changed");
   },

   getState() {
      return this._appState;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._appState.profilePage = profileReducer(
         this._appState.profilePage,
         action
      );
      this._appState.dialogsPage = dialogsReducer(
         this._appState.dialogsPage,
         action
      );
      this._appState.sidebar = sidebarReducer(this._appState.sidebar, action);

      this._callSubscriber(this._appState);
   },
};

export default store;
