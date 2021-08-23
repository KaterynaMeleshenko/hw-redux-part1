import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthorInfo from './Authors';
import authorsInfo from './AuthorsInfo';
import Post from '../Components/Post';

const CHECK_PIC = 'https://www.kommersant.uk/uploads/article/image/7189/v780x400_11.jpg';
const CHECK_TEXT = (`Панда имеет необычную лапу: помимо обычных 5 пальцев у нее есть 
своеобразный 6-й «палец», на самом деле являющийся измененной костью запястья. 
98% диеты панд составляет бамбук. Каждый день панда более 12 часов занята
едой и съедает примерно 12-15% от своего веса.`);

function AddPostInfo () {

  const postsInfoArray = useSelector(state => state.postsContent);
  console.log("posts info", postsInfoArray)

  const [inputName, setInputName] = React.useState("Adavra Kedavra");
  const [inputText, setInputText] = React.useState(CHECK_TEXT);
  const [inputPhoto, setInputPhoto] = React.useState(CHECK_PIC); 
  const dispatch = useDispatch();

  const actionAddPostInfo = ({
    type: 'add-post-info',
      newPost: {
        inputName,
        inputText,
        inputPhoto,
  }
})

  return (
    <div>
      <h1>Please, fill the form</h1>
      <form>
        <textarea
          className="text-input"
          key="text"
          type="text" 
          placeholder="Type your text" 
          value={inputText} 
          onChange={(e) => {
            setInputText(e.target.value);
          }}/>    
        <input
           className="photo-input"
           key="photo"
           type="text" 
           placeholder="Type a link for a photo" 
           value={inputPhoto}
           onChange={(e) => {
             setInputPhoto(e.target.value);
           }}/>   
        <select 
          className="name-select"
          key="name"
          as="select"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}>
          {authorsInfo.map(author => <AuthorInfo {...author} key = {author.id}/>)}     
        </select> 
        <button 
          key="button" 
          type="button"
          onClick={ () => {
            dispatch(actionAddPostInfo);
          }}> ADD POST    
        </button>
      </form>
      <div className="posts">
        {postsInfoArray.map(post => <Post {...post} key = {post.id}/>)}
      </div> 
    </div>
  )
}

export default AddPostInfo;