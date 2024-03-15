import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import UsersReducers from "../features/users/UsersSlice"

export const store = configureStore({
    reducer:{
       posts: postsReducer,
       users: UsersReducers,
    }
})