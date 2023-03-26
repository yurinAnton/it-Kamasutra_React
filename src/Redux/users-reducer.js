const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: false,
};

const usersReducer = (appState = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...appState,
            users: appState.users.map( u => {
               if (u.id === action.userId ) {
                  return {...u, followed: true}
               }
               return u;
            } )
         }
      case UNFOLLOW:
         return {
            ...appState,
            users: appState.users.map( u => {
               if (u.id === action.userId ) {
                  return {...u, followed: false}
               }
               return u;
            } )
         }

      case SET_USERS:
         return {
             ...appState, users: action.users
         }

      case SET_CURRENT_PAGE: {
         return {
             ...appState, currentPage: action.currentPage}
         }

         case SET_TOTAL_USER_COUNT: {
         return {
             ...appState, totalUsersCount: action.count}
         }

         case TOGGLE_IS_FETCHING: {
         return {
             ...appState, isFetching: action.isFetching}
         }

         case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
             ...appState, followingInProgress: action.isFetching}
         }

      default:
         return appState;
   }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUsersCount });
export const toggeleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggeleFollowingProgress= (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });

export default usersReducer;
