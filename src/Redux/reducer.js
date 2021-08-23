import React from 'react';
import store from './reduxConfig';
import postsInfo from './PostsInfo';

const ABSTRACT_PHOTO = "https://st.depositphotos.com/1787196/1327/i/950/depositphotos_13270966-stock-photo-crazy-panda.jpg";

const initialState = {
  postsContent: postsInfo,
}

function  infoReducer (state = initialState, action) {
  switch (action.type) {
    case 'add-post-info': 
      return {
        postsContent: [...state.postsContent, {
          author: action.newPost.inputName,
          text: action.newPost.inputText,
          photo: action.newPost.inputPhoto,
          ava: ABSTRACT_PHOTO,
          nickname: `@${action.newPost.inputName.toLowerCase().replace(" ","_")}`,
          date: `${Date().toString().slice(4, 10)}`,
        },],
      };
    default:
      return state
  } 
}

export default infoReducer;