const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (appState = initialState, action) => {


   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:

         return  {
            ...appState,
            newMessageBody: action.body
         };

      case SEND_MESSAGE:

         let body = appState.newMessageBody;
         return  {
            ...appState,
            newMessageBody: "",
            messages: [...appState.messages, { id: 6, message: body }]
         };

      default:
         return appState;
   }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body,
});

export default dialogsReducer;
