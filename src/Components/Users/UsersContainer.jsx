import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggeleIsFetching,
    setTotalUsersCount
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggeleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggeleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}

            />
        </>
    }
}

let mapStateToProps = (appState) => {
    return {
        // Props
        users: appState.usersPage.users,
        pageSize: appState.usersPage.pageSize,
        totalUsersCount: appState.usersPage.totalUsersCount,
        currentPage: appState.usersPage.currentPage,
        isFetching: appState.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch (followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch (unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch (setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingActionCreator(isFetching));
//         }
//
//     }
// }



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggeleIsFetching,
}) (UsersContainer);





